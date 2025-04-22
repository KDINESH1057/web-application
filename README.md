# Interactive Mood Journal with Weather Integration

## Project Overview
The Interactive Mood Journal is a web application that allows users to log their daily moods and visualize them alongside real-time weather data. The application is designed to be user-friendly and responsive, catering to both mobile and desktop users.

## Features
- **Mood Logging**: Users can select from at least five different mood options represented by emojis or custom icons.
- **Weather Integration**: The app fetches real-time weather data based on the user's location using the Geolocation API and a public weather API.
- **Daily Notes**: Users can add short text notes to accompany their mood entries.
- **Calendar View**: A calendar view displays past mood entries, allowing users to filter by specific mood types.
- **Dynamic UI**: The background color and theme change based on the selected mood, enhancing the visual experience.

## Technologies Used
- **Frontend**: React.js for building the user interface.
- **Styling**: Tailwind CSS for responsive design and styling.
- **APIs**: OpenWeatherMap API for fetching weather data.
- **Local Storage**: For storing mood entries and associated weather data.

## Getting Started
To run the application locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd interactive-mood-journal
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Folder Structure
```
interactive-mood-journal
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   ├── pages
│   ├── styles
│   ├── utils
│   ├── App.jsx
│   └── index.js
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Contribution
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.