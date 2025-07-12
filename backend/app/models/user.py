"""
This model is used to store user information in the database.
By: Biscen Fabian Pichardo Rosado
Date: 2025-07-07
Version: 1.0.0
"""

from sqlalchemy import Column, Integer, String, DateTime, Boolean
from ..core.database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    email = Column(String, unique=True)
    password = Column(String)
    created_at = Column(DateTime, default=datetime.now)
    updated_at = Column(DateTime, default=datetime.now)
    is_active = Column(Boolean, default=True)