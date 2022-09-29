/** @type {import('tailwindcss').Config} */module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#31AA75',
        secondary: '#B23256',
      },
    },
  },
  plugins: [],
};
