/** @type {import('tailwindcss').Config} */ module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E4750',
        secondary: '#F6C90E',
      },
    },
  },
  plugins: [],
};
