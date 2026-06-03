"use client";

import { useState } from "react";
import { Cloud, Thermometer, Droplets, Wind, MapPin, Search } from "lucide-react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "City not found!");
      }

      setWeather(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-3 bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Weather Tracker</h1>
          <p className="text-[#666] font-light text-lg">Get real-time weather data for any city around the world.</p>
        </div>

        <div className="group relative mb-12">
          <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
          <div className="bg-[#0a0a0a] border border-[#222] rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]" size={20} />
                <input
                  type="text"
                  placeholder="Enter city name..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#111] border border-[#222] text-white placeholder-[#666] font-light focus:outline-none focus:border-amber-500/50 transition-all duration-300"
                />
              </div>
              <button 
                onClick={handleSearch}
                disabled={loading}
                className="px-6 py-3 cursor-pointer rounded-lg bg-linear-to-r from-amber-500 to-amber-600 text-black font-black hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Search size={20} />
                <span>{loading ? "Searching..." : "Search"}</span>
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 text-red-400 font-light">
            {error}
          </div>
        )}

        {weather && (
          <div className="space-y-8">
            <div className="group relative">
              <div className="absolute -inset-px bg-linear-to-r from-amber-500/20 via-transparent to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
              <div className="bg-linear-to-br from-[#111] to-[#0a0a0a] border border-[#222] rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={24} className="text-amber-500" />
                      <h2 className="text-3xl md:text-4xl font-black">{weather.name}</h2>
                    </div>
                    <p className="text-[#666] font-light text-lg mb-8">{weather.sys.country}</p>

                    <div className="mb-6">
                      <p className="text-[#666] font-light text-sm uppercase tracking-wide mb-2">Current Conditions</p>
                      <p className="text-xl font-light text-[#ccc] capitalize">{weather.weather[0].description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-linear-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                      <Cloud size={80} className="text-amber-500/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Thermometer className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Temperature</p>
                  </div>
                  <p className="text-3xl font-black text-white">{Math.round(weather.main.temp)}°C</p>
                  <p className="text-[#666] font-light text-xs mt-2">Feels like {Math.round(weather.main.feels_like)}°C</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Humidity</p>
                  </div>
                  <p className="text-3xl font-black text-white">{weather.main.humidity}%</p>
                  <p className="text-[#666] font-light text-xs mt-2">Moisture level</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Wind className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Wind Speed</p>
                  </div>
                  <p className="text-3xl font-black text-white">{weather.wind.speed} m/s</p>
                  <p className="text-[#666] font-light text-xs mt-2">Wind direction</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-px bg-linear-to-r from-amber-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></div>
                <div className="bg-[#111] border border-[#222] rounded-lg p-6 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="text-amber-500" size={24} />
                    <p className="text-[#666] font-light text-sm">Cloudiness</p>
                  </div>
                  <p className="text-3xl font-black text-white">{weather.clouds.all}%</p>
                  <p className="text-[#666] font-light text-xs mt-2">Cloud coverage</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!weather && !error && (
          <div className="text-center py-20">
            <Cloud size={64} className="text-[#333] mx-auto mb-6" />
            <p className="text-[#666] font-light text-lg">Search for a city to see weather information</p>
          </div>
        )}
      </div>
    </div>
  );
}