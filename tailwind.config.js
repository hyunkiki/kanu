/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      width: {
        10: "10%",
        15: "15%",
        3: "3px",
      },
      height: {
        35: "35px",
        70: "70vh",
      },
      borderRadius: {
        25: "25%",
      },
      zIndex: {
        1: "1",
        1000: "1000",
        9999: "9999",
      },
      fontSize: {
        10: "10vw",
        50: "50px",
        150: "150px",
        200: "200px",
        180: "180px",
      },
      fontFamily: {
        Righteous: ["Righteous", "sans-serif"],
      },
    },
  },
  plugins: [],
};
