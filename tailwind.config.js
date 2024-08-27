/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#1D4ED8",
          700: "#1E40AF",
          300: "#93C5FD",
          800: "#1E3A8A",
        },
        blue: {
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
        },
        gray: {
          400: "#9ca3af",
          600: "#4b5563",
          700: "#374151",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
