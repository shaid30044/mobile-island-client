/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ["Afacad", "sans-serif"],
      },
      colors: {
        primary: "#34A043",
        past: "#F0F0F4",
      },
      rotate: {
        135: "135deg",
      },
    },
  },
  plugins: [require("daisyui")],
};
