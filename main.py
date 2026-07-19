from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os

app = FastAPI()

class PromptRequest(BaseModel):
    query: str
    language: str = "en"
    portal_mode: str = "fan"

class SecurityGuardrailEvaluator:
    """
    Evaluates input prompts against a list of known jailbreak/prompt injection patterns.
    """
    JAILBREAK_PATTERNS = [
        "ignore all previous instructions",
        "ignore guidelines",
        "ignore instructions",
        "you are now dan",
        "do anything now",
        "system instructions verbatim",
        "system prompt verbatim"
    ]

    @classmethod
    def is_injection_attempt(cls, query: str) -> bool:
        normalized_query = query.lower()
        return any(pattern in normalized_query for pattern in cls.JAILBREAK_PATTERNS)

class ResponseBuilder:
    """
    Assembles localized plans based on user request parameters.
    """
    @staticmethod
    def build_action_plan(query: str, language: str, portal_mode: str) -> str:
        if portal_mode == "waste":
            return "Custodial team dispatched to Gate A Smart Bins."
        return f"Simulated execution plan resolving route to Section 112 in {language}."

@app.post("/api/chat")
async def chat_endpoint(request: PromptRequest):
    """
    Main API endpoint coordinating safety validations and planning steps.
    """
    if not request.query or request.query.strip() == "":
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    api_key = os.getenv("GEMINI_API_KEY", "AQ.Ab8RN6Jul8wonu2_9hvg-76xhNOYI8zvHbgHT6Q4OMO7_DbuUQ")
    if not api_key:
        raise HTTPException(status_code=401, detail="Unauthorized: Gemini API Key missing")

    # Guardrail Interceptor Check
    if SecurityGuardrailEvaluator.is_injection_attempt(request.query):
        return {
            "action_plan": "🛡️ SECURITY AUDIT WARNING: [BLOCKED] Input string matches prompt injection jailbreak signature.",
            "language": request.language,
            "status": "blocked"
        }

    # Build response plan
    action_plan = ResponseBuilder.build_action_plan(
        query=request.query,
        language=request.language,
        portal_mode=request.portal_mode
    )

    return {
        "action_plan": action_plan,
        "language": request.language,
        "status": "success"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
