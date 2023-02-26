/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    boxShadow: {
      cos: "0 0 10px rgb(221, 221, 221)",
    },
    colors: {
      "main-co": "#2196f3",
      "main-co-l": "#1787e0",
    },
    height: {
      "18": "72px",
    },
    textDecoration: {
      underline: "no-underline",
    },
  },
  plugins: [],
};
