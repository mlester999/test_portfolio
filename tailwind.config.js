/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "500px",
      md: "788px",
      lg: "1050px",
      xl: "1350px",
    },
    extend: {
      colors: {
        softBlue: "hsl(212, 64%, 43%)",
        softRed: "hsl(0, 94%, 66%)",
        grayish: "hsl(240, 2%, 26%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: () => ({
        dots: "url(../images/bg-dots.svg)",
      }),
    },
  },
  plugins: [],
};
