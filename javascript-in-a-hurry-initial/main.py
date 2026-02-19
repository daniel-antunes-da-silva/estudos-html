from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
from dotenv import load_dotenv
from pydantic import BaseModel

load_dotenv()

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = os.getenv("WEATHER_API_KEY")

class Coordinates(BaseModel):
    latitude: float
    longitude: float

@app.post("/weather")
async def get_weather(coords: Coordinates):
    url = f"https://api.openweathermap.org/data/2.5/weather?lat={coords.latitude}&lon={coords.longitude}&appid={API_KEY}&units=metric"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        data = response.json()
    
    return {
        "temperature": data.get("main", {}).get("temp"),
        "description": data.get("weather", [{}])[0].get("description"),
        "humidity": data.get("main", {}).get("humidity"),
        "wind_speed": data.get("wind", {}).get("speed"),
        "city": data.get("name")
    }