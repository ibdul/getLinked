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
      },
      colors: {
        dark: "#150E28",
        purple: "#903AFF",
        pink: "#D434FE",
      },
    },
  },
  plugins: [],
};
