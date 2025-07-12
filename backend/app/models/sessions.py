from pydantic import BaseModel
import uuid
from datetime import datetime, timedelta
from typing import Optional, Dict, List

class SessionInfo(BaseModel):
    session_id: str
    user_id: str
    created_at: datetime
    last_activity: datetime
    is_active: bool = True
    metadata: Optional[Dict] = {}

    def to_dict(self):
        return {
            "session_id": self.session_id,
            "user_id": self.user_id,
            "created_at": self.created_at.isoformat(),
            "last_activity": self.last_activity.isoformat(),
            "is_active": self.is_active,
            "metadata": self.metadata
        }
    
    @classmethod
    def from_dict(cls, data: dict):
        if isinstance(data.get("created_at"), str):
            data["created_at"] = datetime.fromisoformat(data["created_at"])
        if isinstance(data.get("last_activity"), str):
            data["last_activity"] = datetime.fromisoformat(data["last_activity"])
        return cls(**data)
    
    def __str__(self):
        return f"SessionInfo(session_id={self.session_id}, user_id={self.user_id})"

class SessionManager:
    """Memory session manager for handling user sessions in memory."""
    
    def __init__(self):
        self.sessions: Dict[str, SessionInfo] = {}
        self.session_timeout = timedelta(hours=24)
    
    def create_session(self, user_id: str, metadata: Optional[Dict] = None) -> SessionInfo:
        """Create a new session"""
        session_id = str(uuid.uuid4())
        now = datetime.now()
        
        session = SessionInfo(
            session_id=session_id,
            user_id=user_id,
            created_at=now,
            last_activity=now,
            is_active=True,
            metadata=metadata or {}
        )
        
        self.sessions[session_id] = session
        return session
    
    def get_session(self, session_id: str) -> Optional[SessionInfo]:
        """Get the session by ID"""
        session = self.sessions.get(session_id)
        if session and session.is_active:
            # Actualizar última actividad
            session.last_activity = datetime.now()
            return session
        return None
    
    def update_session_activity(self, session_id: str) -> bool:
        """Update the last activity of a session"""
        session = self.sessions.get(session_id)
        if session and session.is_active:
            session.last_activity = datetime.now()
            return True
        return False
    
    def deactivate_session(self, session_id: str) -> bool:
        """Deactivate a session"""
        session = self.sessions.get(session_id)
        if session:
            session.is_active = False
            return True
        return False
    
    def delete_session(self, session_id: str) -> bool:
        """Delete a session by ID"""
        if session_id in self.sessions:
            del self.sessions[session_id]
            return True
        return False
    
    def get_user_sessions(self, user_id: str) -> List[SessionInfo]:
        """Get all active sessions for a user"""
        return [
            session for session in self.sessions.values()
            if session.user_id == user_id and session.is_active
        ]
    
    def cleanup_expired_sessions(self) -> int:
        """Clean up expired sessions"""
        now = datetime.now()
        expired_sessions = []
        
        for session_id, session in self.sessions.items():
            if session.last_activity + self.session_timeout < now:
                expired_sessions.append(session_id)
        
        for session_id in expired_sessions:
            del self.sessions[session_id]
        
        return len(expired_sessions)
    
    def get_session_count(self) -> int:
        """Return the count of active sessions"""
        return len([s for s in self.sessions.values() if s.is_active])
    
    def set_session_timeout(self, timeout: timedelta):
        """Set the session timeout duration."""
        self.session_timeout = timeout

# Global instance of SessionManager
session_manager = SessionManager()

# Session management functions
def create_session(user_id: str, metadata: Optional[Dict] = None) -> SessionInfo:
    """Create a new session for a user"""
    return session_manager.create_session(user_id, metadata)

def get_session(session_id: str) -> Optional[SessionInfo]:
    """Get a session by ID"""
    return session_manager.get_session(session_id)

def deactivate_session(session_id: str) -> bool:
    """Deactivate a session by ID"""
    return session_manager.deactivate_session(session_id)

def cleanup_expired_sessions() -> int:
    """Clean up expired sessions"""
    return session_manager.cleanup_expired_sessions()