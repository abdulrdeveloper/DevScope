"use client";

import { useState } from "react";
import { CloudRain, Thermometer, Droplets, CloudSun, Wind } from "lucide-react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "City not found!");
      }

      setWeather(data);
      console.log(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="flex items-center gap-2"><CloudRain size={20} /> Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className="flex items-center gap-1"><Thermometer size={20} /> Temp: {weather.main.temp}°C</p>
          <p className="flex items-center gap-1"><Droplets size={20} /> Humidity: {weather.main.humidity}%</p>
          <p className="flex items-center gap-1"><CloudSun size={20} /> {weather.weather[0].description}</p>
          <p className="flex items-center gap-1"><Wind size={20} /> Wind: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}