/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': "#343131",
        'light-yellow' : "#FDE050",
        'dark-yellow' : "#FCC52D"
      }
    },
  },
  plugins: [],
};
