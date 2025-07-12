from fastapi import APIRouter, Depends
from ..utils.auth_dependencies import get_current_user, get_optional_user

protected_bp = APIRouter(prefix="/api/v1", tags=["protected"])

@protected_bp.get("/profile")
async def get_user_profile(current_user = Depends(get_current_user)):
    return {
        "message": "Profile data",
        "user_id": current_user["user_id"],
        "email": current_user["email"],
        "username": current_user["username"]
    }

@protected_bp.get("/dashboard")
async def get_dashboard(current_user = Depends(get_current_user)):
    return {
        "message": "Dashboard data",
        "user_id": current_user["user_id"],
        "data": {
            "analytics": "Some analytics data",
            "recent_activity": "Recent user activity"
        }
    }

@protected_bp.get("/public-data")
async def get_public_data(current_user = Depends(get_optional_user)):
    if current_user:
        return {
            "message": "Public data with user context",
            "user_id": current_user["user_id"],
            "data": "Personalized content"
        }
    else:
        return {
            "message": "Public data without user context",
            "data": "General content"
        } 