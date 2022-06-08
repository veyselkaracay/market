module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
      height: {
        "1/8": "12.5%",
        "3/8": "37.5%",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-9": "span 9 / span 9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
