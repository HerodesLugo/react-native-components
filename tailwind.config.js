/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary-100': '#000000',
        'primary-200': '#000000',
        'primary-300': '#000000',
        'primary-400': '#000000',
        'primary-500': '#000000',
        'secondary-100': '#fbbf24',
        'secondary-200': '#fbbf24',
        'secondary-300': '#fbbf24',
        'secondary-400': '#fbbf24',
        'secondary-500': '#fbbf24',
        'accent-100': '#4ade80',
        'accent-200': '#4ade80',
        'accent-300': '#4ade80',
        'accent-400': '#4ade80',
        'accent-500': '#4ade80',
      }
    },
  },
  plugins: [],
};
