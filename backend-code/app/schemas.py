from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class TaskBase(BaseModel):
    title: str
    description: str
    status: Optional[str] = "todo"

class TaskCreate(TaskBase):
    pass

class TaskUpdate(BaseModel):
    status: str

class Task(TaskBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
