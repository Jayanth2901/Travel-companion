from fastapi import APIRouter
router = APIRouter()

@router.get("/")
async def root():
    return {"module": "discoveryEngine", "status": "ready"}
