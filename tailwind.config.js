module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        moodHappy: '#FFD700',
        moodSad: '#1E90FF',
        moodAngry: '#FF4500',
        moodRelaxed: '#32CD32',
        moodAnxious: '#FF69B4',
      },
      backgroundImage: theme => ({
        'happy-bg': "url('/path/to/happy-bg.jpg')",
        'sad-bg': "url('/path/to/sad-bg.jpg')",
        'angry-bg': "url('/path/to/angry-bg.jpg')",
        'relaxed-bg': "url('/path/to/relaxed-bg.jpg')",
        'anxious-bg': "url('/path/to/anxious-bg.jpg')",
      }),
    },
  },
  plugins: [],
}