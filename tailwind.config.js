/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#dc2d74",
        yellow: "#fdcd49",
        "deep-blue": "#010026",
        grey: "#ededed",
        "dark-grey": "#757575",
      },
      backgroundImage: (theme) => ({
        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14%, #dc2d74 49%, #FFBD0C 107%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      // vars below allow for config using BEFORE tag
      content: {
        brush: "url('./assets/splash-short2.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};