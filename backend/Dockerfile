FROM python:3.11-slim

# Install system dependencies including ffmpeg for audio/video conversions
# Also install libreoffice for word-to-pdf fallback
RUN apt-get update && apt-get install -y \
    ffmpeg \
    libreoffice \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Create tmp directory
RUN mkdir -p /app/tmp

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
