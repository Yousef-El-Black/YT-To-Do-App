/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // Primary
      brightBlue: "hsl(220, 98%, 61%)",
      checkBackground1: "hsl(192, 100%, 67%)",
      checkBackground2: "hsl(280, 87%, 65%)",

      // Light Theme
      veryLightGray: "hsl(0, 0%, 98%)",
      veryLightGrayishBlue: "hsl(236, 33%, 92%)",
      lightGrayishBlueLight: "hsl(233, 11%, 84%)",
      darkGrayishBlueLight: "hsl(236, 9%, 61%)",
      veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

      // Dark Theme
      veryDarkBlue: "hsl(235, 21%, 11%)",
      veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      lightGrayishBlueDark: "hsl(234, 39%, 85%)",
      lightGrayishBlueHover: "hsl(236, 33%, 92%)",
      darkGrayishBlueDark: "hsl(234, 11%, 52%)",
      veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
      veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
