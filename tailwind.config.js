/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      colors: {
        primary: {
          DEFAULT: "#276543",
          light: "#34DB8A",
          main: "#276543",
          dark: "#0F412B",
        },
      },
    },
  },
  plugins: [],
};
