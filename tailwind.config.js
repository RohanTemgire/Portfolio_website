/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#06b6d4", // Cyan
        secondary: "#8b5cf6", // Purple
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      }
    },
  },
  plugins: [],
}
