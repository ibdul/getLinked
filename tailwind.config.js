/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        heading: ["clash display", "impact", "serif"],
        special: ["Unica One", "cursive"],
      },
      fontSize: {
        sm: "12px",
        base: "14px",
      },
      colors: {
        dark: "#150E28",
        purple: "#903AFF",
        pink: {
          DEFAULT: "#D434FE",
          100: "#FE34B9",
          200: "#FF26B9",
        },
      },
    },
  },
  plugins: [],
};
