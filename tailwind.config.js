/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors:{
        dark: "#0f0c29",
        light:"#141e30",
      },
    },
    fontFamily: {
      signature: ["Great Vibes"], 
    },
  },
  plugins: [],
};
