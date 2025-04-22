import React from 'react';

const CalendarView = ({ entries }) => {
    const renderEntries = () => {
        return entries.map((entry, index) => (
            <div key={index} className="entry">
                <div className="date">{entry.date}</div>
                <div className="mood">{entry.mood}</div>
                <div className="weather">{entry.weather}</div>
                <div className="note">{entry.note}</div>
            </div>
        ));
    };

    return (
        <div className="calendar-view">
            <h2>Past Mood Entries</h2>
            <div className="entries">
                {renderEntries()}
            </div>
        </div>
    );
};

export default CalendarView;