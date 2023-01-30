/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: { Manrope: ["Manrope", "sans-serif"] },
      colors: {
        design: {
          LightCyan: "#CEE3E9",
          NeonGreen: "#52FFA8",
          GrayishBlue: "#4E5D73",
          DarkGrayishBlue: "#323A49",
          DarkBlue: "#1F2632",
        },
        screens: {
          ms: "320px",

          mm: "375px",

          ml: "425px",

          sm: "640px",

          md: "768px",

          lg: "1024px",

          xl: "1280px",

          "2xl": "1440px",
        },
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        DiceSpin: "spin 4s linear infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
