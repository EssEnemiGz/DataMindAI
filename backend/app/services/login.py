from ..core.database import get_db
from fastapi import APIRouter, Depends, Response, Request, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from ..models.auth_service import AuthService
from ..models.sessions import create_session, deactivate_session

class LoginRequest(BaseModel):
    email: str
    password: str

class LoginOnlyRequest(BaseModel):
    email: str
    password: str

login_bp = APIRouter(prefix="/api/v1", tags=["login"])

@login_bp.post("/login")
async def login(login_data: LoginOnlyRequest, response: Response, db: Session = Depends(get_db)):
    """
    Endpoint for user login with session cookies.
    """
    auth_service = AuthService(db)
    user_data = auth_service.authenticate_user(login_data.email, login_data.password)
    
    session = create_session(str(user_data["user_id"]))
    
    # Set session cookie with improved configuration
    response.set_cookie(
        key="session_id",
        value=session.session_id,
        httponly=False,  # Changed to False so JavaScript can access it
        secure=False,  # Set to True in production with HTTPS
        samesite="lax",
        max_age=86400,  # 24 hours
        path="/",
        domain=None  # Allow cookies to work across subdomains
    )
        
    return {
        "message": "Login successful",
        "user_id": str(user_data["user_id"]),
        "email": user_data["email"]
    }

@login_bp.post("/logout")
async def logout(request: Request, response: Response):
    """
    Endpoint for user logout that clears session cookies.
    """
    session_id = request.cookies.get("session_id")
    
    if session_id:
        # Deactivate the session
        deactivate_session(session_id)
    
    # Clear the session cookie
    response.delete_cookie(
        key="session_id",
        httponly=False,
        secure=False,
        samesite="lax",
        path="/"
    )
    
    return {
        "message": "Logout successful"
    }

@login_bp.get("/me")
async def get_current_user(request: Request, db: Session = Depends(get_db)):
    """
    Get current user information from session cookie.
    """
    session_id = request.cookies.get("session_id")
    if not session_id:
        raise HTTPException(status_code=401, detail="No session found")
    
    auth_service = AuthService(db)
    try:
        user_data = auth_service.verify_session(session_id)
        return user_data
    except HTTPException as e:
        raise e
    except Exception:
        raise HTTPException(status_code=401, detail="Session verification failed")