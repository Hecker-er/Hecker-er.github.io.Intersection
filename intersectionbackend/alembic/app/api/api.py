from fastapi import APIRouter

from .endpoints import tasks

router = APIRouter()
router.include_router(tasks.router, prefix="/tasks")
