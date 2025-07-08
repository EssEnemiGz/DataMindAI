from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from .services.login import login_bp
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()

CORS_ORIGINS_STR = os.getenv("CORS_ORIGINS")
if not CORS_ORIGINS_STR:
    raise ValueError("CORS_ORIGINS environment variable is not set.")

if CORS_ORIGINS_STR == "*":
    CORS_ORIGINS = ["*"]
    allow_credentials = False
else:
    CORS_ORIGINS = [origin.strip() for origin in CORS_ORIGINS_STR.split(",")]
    allow_credentials = True

secret_key = os.getenv("SECRET_KEY")
if not secret_key or secret_key == "":
    raise ValueError("SECRET_KEY environment variable is not set.")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=allow_credentials,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.add_middleware(
    SessionMiddleware,
    secret_key=secret_key
)

app.include_router(login_bp)

@app.get("/", tags=["root"])
async def read_root():
    return {"message": "Hello, World!"}

@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "healthy"}