from ..core.database import get_db
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from ..models.auth_service import AuthService
from ..models.sessions import create_session

class LoginRequest(BaseModel):
    email: str
    password: str

class LoginOnlyRequest(BaseModel):
    email: str
    password: str

login_bp = APIRouter(prefix="/api/v1", tags=["login"])

@login_bp.post("/login")
async def login(login_data: LoginOnlyRequest, db: Session = Depends(get_db)):
    """
    Endpoint for user login.
    """
    auth_service = AuthService(db)
    user_data = auth_service.authenticate_user(login_data.email, login_data.password)
    
    session = create_session(str(user_data["user_id"]))
        
    return {
        "message": "Login successful",
        "session_id": session.session_id,
        "user_id": str(user_data["user_id"])
    }