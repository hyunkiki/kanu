/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        10: "10%",
        15: "15%",
        3: "3px",
      },
      height: {
        35: "35px",
      },
      borderRadius: {
        25: "25%",
      },
    },
  },
  plugins: [],
};
