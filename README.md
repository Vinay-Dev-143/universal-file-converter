# Universal File Conversion Toolkit

A full-stack SaaS application for converting diverse file formats with ease. Features a Next.js App Router frontend customized for high-performance SEO and a Python FastAPI backend that interfaces with several open-source audio, video, image, and document conversion libraries.

## System Prerequisites
- Node.js 18+
- Python 3.10+
- FFmpeg (Must be installed on host system or Docker container)
- LibreOffice/MS Word (Optional, but required for Word to PDF conversion)

## Step-by-Step Local Deployment Guide

### 1. Backend Setup

The backend handles all heavy lifting via Python.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Virtual Environment:
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\activate
   # Linux/Mac
   source venv/bin/activate
   ```
3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the development server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```
   *The backend will now run at `http://localhost:8000`*.
   *You can test APIs using Swagger UI at `http://localhost:8000/docs`*.

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install npm dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *The frontend will run at `http://localhost:3000`*.

### 3. Docker Deployment (Recommended)

To run both services via Docker Compose:

1. Ensure Docker Desktop is running.
2. In the root directory (`Universal Conversion/`), run:
   ```bash
   docker-compose up --build -d
   ```
This maps the Backend to `8000` and the Frontend to `3000` simultaneously, resolving FFmpeg and LibreOffice dependencies automatically using the Dockerfile.

## Cloud Deployment Guide

### Deploying the Frontend to Vercel
1. Push the repository to GitHub.
2. Log into [Vercel](https://vercel.com/) and create a "New Project".
3. Select your repository.
4. Set the **Root Directory** to `frontend`.
5. Add the Environment Variable:
   - `NEXT_PUBLIC_API_URL`: Your deployed backend URL (e.g. `https://api.yourdomain.com`).
6. Click **Deploy**.

### Deploying the Backend to Render
1. Log into [Render](https://render.com/) and create a new "Web Service".
2. Connect your GitHub repository.
3. Set the **Root Directory** to `backend`.
4. Render using Docker:
   - Make sure Render environment is set to `Docker`. It will detect the `backend/Dockerfile`.
5. Set environment variables (if any specific ones are later required, e.g. for S3 storage instead of local).
6. Click **Create Web Service**.

## Features Included
- **PDF to Word**: `.pdf` -> `.docx`
- **Word to PDF**: `.docx` -> `.pdf`
- **Image to PDF**: `image/*` -> `.pdf`
- **JPG to PNG**: `.jpg` -> `.png`
- **Video to MP3**: `.mp4/.mkv/.avi` -> `.mp3`
- **Audio Converter**: `.wav/.ogg` -> `.mp3`
- **PDF Compressor**: Shrinks `.pdf` streams.

## Notes & Monetization
Ads placeholders are strategically located in `frontend/src/app/page.tsx` and `frontend/src/app/layout.tsx`. To monetize the website, replace the placeholder `div` with your Google AdSense `ins` snippet.
