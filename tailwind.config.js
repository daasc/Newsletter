/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "1440px",
    },
    colors: {
      primary: "hsl(4, 100%, 67%)",
      "dark-slate-grey": "hsl(234, 29%, 20%)",
      "charcoal-grey": "hsl(235, 18%, 26%)",
      grey: "hsl(231, 7%, 60%)",
      white: "hsl(0, 0%, 100%)",
      background: 'rgba(54,56,77,255)'
    },
    extend: {},
  },
  plugins: [],
};
