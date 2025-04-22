export const saveMoodEntry = (entry) => {
    const existingEntries = getMoodEntries();
    existingEntries.push(entry);
    localStorage.setItem('moodEntries', JSON.stringify(existingEntries));
};

export const getMoodEntries = () => {
    const entries = localStorage.getItem('moodEntries');
    return entries ? JSON.parse(entries) : [];
};

export const clearMoodEntries = () => {
    localStorage.removeItem('moodEntries');
};