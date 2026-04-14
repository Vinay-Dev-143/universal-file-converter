from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from routers import convert
import os

app = FastAPI(
    title="Universal File Conversion Toolkit API",
    description="Backend API for file conversion services.",
    version="1.0.0"
)

# Allow CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Change this for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure tmp directory exists
os.makedirs("tmp", exist_ok=True)

app.include_router(convert.router, prefix="/convert", tags=["Convert"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Universal File Conversion Toolkit API"}
