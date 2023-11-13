/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {},

    colors: {
      "Soft-Blue": "hsl(231, 69%, 60%)",
      "Soft-Blue2": "hsl(231, 69%, 85%)",
      "Soft-Red": "hsl(0, 94%, 66%)",

      "Grayish-Blue": "hsl(229, 8%, 60%)",
      "Very-Dark-Blue": "hsl(229, 31%, 21%)",

      white: "#fff",
    },
    plugins: [
      plugin(function ({ addVariant }) {
        addVariant("children", "&>*");
      }),
    ],
  },
  plugins: [],
};
