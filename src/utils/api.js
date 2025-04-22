export const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = '0bc3dad4a9dcdffba5cf61e1281a5dd4'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};