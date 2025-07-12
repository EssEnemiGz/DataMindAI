from ..core.database import get_db
from fastapi import APIRouter, Depends
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
async def register(register_data: RegisterRequest, db: Session = Depends(get_db)):
    """
    Endpoint for user registration.
    """
    auth_service = AuthService(db)
    user = auth_service.create_user(register_data.username, register_data.email, register_data.password)
    
    session = create_session(str(user.id))
    
    return {
        "message": "User created successfully",
        "session_id": session.session_id,
        "user_id": user.id
    }