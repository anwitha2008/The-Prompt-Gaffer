import pytest
from fastapi.testclient import TestClient
from main import app

# Set up test client
client = TestClient(app)

def test_chat_integration_success():
    """
    Integration test simulating a fan requesting navigation routing instructions.
    Asserts HTTP 200 status code and matches the expected JSON data format.
    """
    payload = {
        "query": "I am looking for wheelchair accessible routes from Lot C.",
        "language": "en",
        "portal_mode": "fan"
    }
    
    # Perform POST request
    response = client.post("/api/chat", json=payload)
    
    # Validate successful 200 OK response
    assert response.status_code == 200, f"Expected 200 OK but got {response.status_code}"
    
    # Validate structure and format
    data = response.json()
    assert isinstance(data, dict)
    assert "action_plan" in data
    assert "language" in data
    assert "status" in data
    
    assert data["status"] == "success"
    assert "Section 112" in data["action_plan"]

def test_chat_integration_empty_error():
    """
    Integration test asserting error response when sending invalid queries.
    """
    payload = {
        "query": "  ",
        "language": "en",
        "portal_mode": "fan"
    }
    
    response = client.post("/api/chat", json=payload)
    
    # Validate Bad Request error code
    assert response.status_code == 400
    assert "Query cannot be empty" in response.json()["detail"]

def test_chat_integration_size_limit_exceeded():
    """
    Integration test asserting Pydantic input validation triggers 422 Unprocessable Entity
    when the query string length exceeds the 2000 characters limit.
    """
    large_query = "A" * 2005
    payload = {
        "query": large_query,
        "language": "en",
        "portal_mode": "fan"
    }
    
    response = client.post("/api/chat", json=payload)
    
    # Assert validation error status
    assert response.status_code == 422

def test_secure_headers_presence():
    """
    Integration test confirming that secure HTTP headers are present in responses.
    """
    payload = {
        "query": "Checking headers.",
        "language": "en",
        "portal_mode": "fan"
    }
    
    response = client.post("/api/chat", json=payload)
    
    # Assert that all standard headers are appended
    assert response.headers.get("X-Frame-Options") == "DENY"
    assert response.headers.get("X-Content-Type-Options") == "nosniff"
    assert response.headers.get("X-XSS-Protection") == "1; mode=block"
    assert response.headers.get("Referrer-Policy") == "strict-origin-when-cross-origin"
