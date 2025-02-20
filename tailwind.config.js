/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,tsx,js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-stroke': '#E5E7E9',
      }
    },
  },
  varians: {},
  plugins: [],
};

