import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../utils/api';

const WeatherDisplay = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const data = await getWeatherData(latitude, longitude);
                        setWeather(data);
                    } catch (err) {
                        setError('Failed to fetch weather data');
                    }
                }, () => {
                    setError('Geolocation is not enabled or permission denied');
                });
            } else {
                setError('Geolocation is not supported by this browser');
            }
        };

        fetchWeather();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!weather) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div className="weather-display">
            <h2 className="text-xl font-bold">Current Weather</h2>
            <div className="flex items-center">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
                <span className="text-lg">{Math.round(weather.main.temp)}°C</span>
            </div>
            <p>{weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherDisplay;