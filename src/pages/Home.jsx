import React, { useState, useEffect } from 'react';
import MoodSelector from '../components/MoodSelector';
import WeatherDisplay from '../components/WeatherDisplay';
import CalendarView from '../components/CalendarView';
import Header from '../components/Header';
import { fetchWeatherData } from '../utils/api';
import { saveMoodEntry, getMoodEntries } from '../utils/storage';

const Home = () => {
    const [mood, setMood] = useState('');
    const [note, setNote] = useState('');
    const [weather, setWeather] = useState(null);
    const [moodEntries, setMoodEntries] = useState([]);
    const [error, setError] = useState('');
    const currentDate = new Date().toLocaleDateString();

    useEffect(() => {
        const loadMoodEntries = async () => {
            try {
                const entries = await getMoodEntries();
                setMoodEntries(entries || []);
            } catch (err) {
                console.error('Failed to load mood entries:', err);
            }
        };

        const loadWeather = async () => {
            try {
                const weatherData = await fetchWeatherData();
                setWeather(weatherData);
            } catch (err) {
                console.error('Failed to fetch weather data:', err);
            }
        };

        loadMoodEntries();
        loadWeather();
    }, []);

    const handleMoodChange = (selectedMood) => {
        setMood(selectedMood);
        setError(''); // Clear error when mood is selected
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const handleSaveEntry = () => {
        if (!mood) {
            setError('Please select a mood before saving.');
            return;
        }

        const newEntry = { date: currentDate, mood, note, weather };
        saveMoodEntry(newEntry);
        setMoodEntries([...moodEntries, newEntry]);
        setMood('');
        setNote('');
        setError(''); // Clear error after successful save
    };

    return (
        <div className="home-container">
            <Header currentDate={currentDate} />
            <MoodSelector onMoodChange={handleMoodChange} />
            <textarea
                value={note}
                onChange={handleNoteChange}
                placeholder="Add a note..."
                className="note-input"
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSaveEntry} className="save-button">Save Entry</button>
            <WeatherDisplay weather={weather} />
            <CalendarView moodEntries={moodEntries} />
        </div>
    );
};

export default Home;