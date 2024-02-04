/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        Primary: "#14b8a6",
        Black: "#000000",
        White: "#ffffff",
        Gray: "#b5b5b5",
      },
      fontFamily: {
        Figtree: ["Figtree", "sans-serif"],
      },
      screens: {
        phone: "480px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
