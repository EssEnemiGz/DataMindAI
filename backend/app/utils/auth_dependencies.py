from fastapi import Depends, HTTPException, Request
from sqlalchemy.orm import Session
from ..core.database import get_db
from ..models.auth_service import AuthService

def get_current_user(request: Request, db: Session = Depends(get_db)):
    """
    Dependency to get current authenticated user from session cookie.
    Use this to protect endpoints that require authentication.
    """
    session_id = request.cookies.get("session_id")
    
    if not session_id:
        raise HTTPException(status_code=401, detail="Authentication required")
    
    auth_service = AuthService(db)
    try:
        user_data = auth_service.verify_session(session_id)
        return user_data
    except HTTPException:
        raise HTTPException(status_code=401, detail="Invalid or expired session")

def get_optional_user(request: Request, db: Session = Depends(get_db)):
    """
    Dependency to get current user if available, returns None if not authenticated.
    Use this for endpoints that work with or without authentication.
    """
    session_id = request.cookies.get("session_id")
    
    if not session_id:
        return None
    
    auth_service = AuthService(db)
    try:
        user_data = auth_service.verify_session(session_id)
        return user_data
    except HTTPException:
        return None 