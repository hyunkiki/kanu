/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      width: {
        10: "10%",
        15: "15%",
        3: "3px",
        300: "300vw",
        40: "40%",
      },
      height: {
        35: "35px",
        70: "70vh",
        300: "300vh",
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
        20: "20px",
        25: "25px",
        30: "30px",
        50: "50px",
        150: "150px",
        160: "160px",
        180: "180px",
        190: "190px",
        200: "200px",
      },
      fontFamily: {
        Righteous: ["Righteous", "sans-serif"],
      },
      maxWidth: {
        480: "480px",
      },
      maxHeight: {
        300: "300vh",
      },
      lineHeight: {
        2: "2",
      },
      colors: {
        red: "red",
      },
      top: {
        10: "10%",
        15: "15%",
      },
    },
  },
  plugins: [],
};
