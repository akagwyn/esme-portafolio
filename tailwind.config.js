/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        specter: ["specter"],
      },
      colors: {
        primary: {
          50: "#f5f5f5",
          100: "#212121",
          200: "#ce4926",
        },
      },
    },
  },
  plugins: [],
};
