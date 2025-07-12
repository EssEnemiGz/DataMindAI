from sqlalchemy.orm import Session
from ..models.tables import User
from fastapi import HTTPException
import bcrypt

class AuthService:
    def __init__(self, db: Session):
        self.db = db
    
    def authenticate_user(self, email: str, password: str):
        """
        Authenticate user with email/email and password
        """
        user = self.db.query(User).filter(User.email == email).first()
        
        if not user:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        
        try:
            stored_password = user.password
            
            if not bcrypt.checkpw(password.encode('utf-8'), stored_password.encode('utf-8')):
                raise HTTPException(status_code=401, detail="Invalid credentials")
            
            return {
                "message": "Login successful",
                "user_id": user.id,
                "email": user.email,
            }
        except ValueError:
            raise HTTPException(status_code=500, detail="Password format error")
        except Exception:
            raise HTTPException(status_code=500, detail="Authentication error")
    
    def get_user_by_email(self, email: str):
        """
        Get user by email
        """
        return self.db.query(User).filter(User.email == email).first()
    
    def create_user(self, username: str, email: str, password: str):
        """
        Create a new user
        """
        existing_user = self.db.query(User).filter(
            (User.email == email) | (User.username == username)
        ).first()
        
        if existing_user:
            raise HTTPException(status_code=400, detail="User already exists")
        
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        
        new_user = User(
            username=username,
            email=email,
            password=hashed_password.decode('utf-8')
        )
        
        self.db.add(new_user)
        self.db.commit()
        self.db.refresh(new_user)
        
        return new_user 