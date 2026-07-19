from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os

app = FastAPI()

class PromptRequest(BaseModel):
    query: str
    language: str = "en"
    portal_mode: str = "fan"

@app.post("/api/chat")
async def chat_endpoint(request: PromptRequest):
    """
    Main processing endpoint for AI chat assistant queries.
    Scans for safety guardrails and outputs a structured action plan.
    """
    if not request.query or request.query.strip() == "":
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    api_key = os.getenv("GEMINI_API_KEY", "AQ.Ab8RN6Jul8wonu2_9hvg-76xhNOYI8zvHbgHT6Q4OMO7_DbuUQ")
    if not api_key:
        raise HTTPException(status_code=401, detail="Unauthorized: Gemini API Key missing")

    # Heuristic Security Guardrails
    query_lower = request.query.lower()
    if "ignore all previous instructions" in query_lower or "dan" in query_lower:
        return {
            "action_plan": "🛡️ SECURITY AUDIT WARNING: [BLOCKED] Input string matches prompt injection jailbreak signature.",
            "language": request.language,
            "status": "blocked"
        }

    # Standard responses
    action_plan = f"Simulated execution plan resolving route to Section 112 in {request.language}."
    if request.portal_mode == "waste":
        action_plan = "Custodial team dispatched to Gate A Smart Bins."
        
    return {
        "action_plan": action_plan,
        "language": request.language,
        "status": "success"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
