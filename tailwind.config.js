/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#ff69b4',
        'gradient-end': '#9370db',
      },
    },
  },
  plugins: [],
}

