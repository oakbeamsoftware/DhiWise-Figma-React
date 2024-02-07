module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 900: "#0011b2" },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        lime: { 700: "#a5ae3c", 900: "#ae653c" },
        light_green: { 800: "#629126" },
        deep_orange: { 200: "#ffaaaa" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      opacity: { op: "0.1" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
