from ..core.database import get_db
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from ..models.auth_service import AuthService
from ..models.sessions import create_session

class LoginRequest(BaseModel):
    username: str
    email: str
    password: str

login_bp = APIRouter(prefix="/api/v1", tags=["login"])

@login_bp.post("/login")
async def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    """
    Endpoint for user login.
    """
    auth_service = AuthService(db)
    user_data = auth_service.authenticate_user(login_data.email, login_data.password)
    
    session = create_session(user_data["user_id"])
    
    return {
        "message": "Login successful",
        "session_id": session.session_id,
        "user_id": user_data["user_id"]
    }

@login_bp.post("/register")
async def register(login_data: LoginRequest, db: Session = Depends(get_db)):
    """
    Endpoint for user registration.
    """
    auth_service = AuthService(db)
    user = auth_service.create_user(
        username=login_data.username,
        email=login_data.email,
        password=login_data.password
    )
    return {"message": "User created successfully", "user_id": user.id}