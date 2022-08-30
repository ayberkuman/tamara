/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/components/**/*.{html,,ts,tsx}",
    "./src/pages/**/*.{html,,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        forHeader: "0 4px 6px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        lightBlack: "#2D2D2D",
        textGray: "#8F8F8F",
        cardBgGray: "#F2F2F2",
        btnGray: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
