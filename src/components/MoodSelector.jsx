import React, { useState } from 'react';

const MoodSelector = ({ onMoodSelect }) => {
    const [selectedMood, setSelectedMood] = useState(null);
    const moods = [
        { id: 1, emoji: '😀', label: 'Happy' },
        { id: 2, emoji: '😐', label: 'Neutral' },
        { id: 3, emoji: '😢', label: 'Sad' },
        { id: 4, emoji: '😠', label: 'Angry' },
        { id: 5, emoji: '😌', label: 'Relaxed' },
    ];

    const handleMoodClick = (mood) => {
        setSelectedMood(mood);
        onMoodSelect(mood);
    };

    return (
        <div className="mood-selector">
            <h2>Select Your Mood</h2>
            <div className="mood-options">
                {moods.map((mood) => (
                    <button
                        key={mood.id}
                        className={`mood-option ${selectedMood === mood ? 'selected' : ''}`}
                        onClick={() => handleMoodClick(mood)}
                    >
                        {mood.emoji} {mood.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MoodSelector;