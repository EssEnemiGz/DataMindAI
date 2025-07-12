from sqlalchemy import Column, Integer, String, DateTime, Boolean
from ..core.database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100))
    email = Column(String(100), unique=True, index=True)
    password = Column(String(100))
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)
    is_active = Column(Boolean, default=True)
