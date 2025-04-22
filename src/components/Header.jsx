import React from 'react';

const Header = () => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">Interactive Mood Journal</h1>
            <p className="text-lg">{currentDate}</p>
        </header>
    );
};

export default Header;