from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from travelTwin.router      import router as twin_router
from harmonyPredictor.router import router as harmony_router
from discoveryEngine.router  import router as discovery_router

app = FastAPI(title="AI Travel Companion Engine", version="1.0.0")

app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

app.include_router(twin_router,      prefix="/twin",      tags=["Travel Twin"])
app.include_router(harmony_router,   prefix="/harmony",   tags=["Harmony"])
app.include_router(discovery_router, prefix="/discovery", tags=["Discovery"])

@app.get("/health")
def health(): return {"status": "ok"}
