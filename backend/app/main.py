from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()
CORS_ORIGINS = os.getenv("CORS_ORIGINS")
if not CORS_ORIGINS:
    raise ValueError("CORS_ORIGINS environment variable is not set.")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["root"])
async def read_root():
    return {"message": "Hello, World!"}

@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "healthy"}