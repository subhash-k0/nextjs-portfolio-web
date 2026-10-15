/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            DarkTheme: '#11001f',
        },
        fontFamily: {
            outfit: ['Outfit', 'sans-serif'],
            ovo: ['Ovo', 'serif'],
        },
    },
  },
  plugins: [],
}