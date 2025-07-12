from ..core.database import get_db
from fastapi import APIRouter, Depends, Response
from sqlalchemy.orm import Session
from pydantic import BaseModel
from ..models.auth_service import AuthService
from ..models.sessions import create_session

class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str

register_bp = APIRouter(prefix="/api/v1", tags=["register"])

@register_bp.post("/register")
async def register(register_data: RegisterRequest, response: Response, db: Session = Depends(get_db)):
    """
    Endpoint for user registration with session cookies.
    """
    auth_service = AuthService(db)
    user = auth_service.create_user(register_data.username, register_data.email, register_data.password)
    
    session = create_session(str(user.id))
    
    response.set_cookie(
        key="session_id",
        value=session.session_id,
        httponly=True,
        secure=False,  # Set to True in production with HTTPS
        samesite="lax",
        max_age=86400
    )
    
    return {
        "message": "User created successfully",
        "user_id": user.id,
        "email": user.email,
        "username": user.username
    }