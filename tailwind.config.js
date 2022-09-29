/** @type {import('tailwindcss').Config} */module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39CE20',
        secondary: '#FF8E00',
      },
    },
  },
  plugins: [],
};
