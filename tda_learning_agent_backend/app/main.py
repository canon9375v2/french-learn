from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from .models.db import init_db
from .routers.api import router

BASE=Path(__file__).resolve().parents[1]
app=FastAPI(title='TDA Learning Agent API',version='0.2.0')
app.add_middleware(CORSMiddleware,allow_origins=['*'],allow_credentials=False,allow_methods=['*'],allow_headers=['*'])
init_db()
app.include_router(router)
app.mount('/static',StaticFiles(directory=BASE/'static'),name='static')
@app.get('/')
def index(): return FileResponse(BASE/'static'/'index.html')
