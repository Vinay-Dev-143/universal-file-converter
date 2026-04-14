import os
import uuid
import shutil
from fastapi import UploadFile

TMP_DIR = "tmp"

def get_temp_file_path(filename: str) -> str:
    ext = os.path.splitext(filename)[1]
    unique_name = f"{uuid.uuid4().hex}{ext}"
    return os.path.join(TMP_DIR, unique_name)

def get_temp_dir_path() -> str:
    folder_name = uuid.uuid4().hex
    path = os.path.join(TMP_DIR, folder_name)
    os.makedirs(path, exist_ok=True)
    return path

def save_upload_file(upload_file: UploadFile, dest_path: str):
    with open(dest_path, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)
        
def cleanup_file(filepath: str):
    if os.path.exists(filepath):
        try:
            os.remove(filepath)
        except Exception as e:
            print(f"Error removing {filepath}: {e}")

def cleanup_dir(dirpath: str):
    if os.path.exists(dirpath):
        try:
            shutil.rmtree(dirpath)
        except Exception as e:
            print(f"Error removing directory {dirpath}: {e}")
