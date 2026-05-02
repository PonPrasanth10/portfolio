/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2430",
        secondary: "#2F2F2F",
        textPrimary: "#D6D9DC",
        textSecondary: "#9FB4BD",
        accent: "#8A8F95",
        cardGlass: "rgba(255, 255, 255, 0.05)",
        borderSubtle: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
