/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      backgroundImage: {
        BgWelcoming: "url('./src/assets/image/background.png')",
        BgCatalogDuren: "url('./src/assets/image/bgCatalogDuren.jpg')",
      },
      colors: {
        primary: "#FCC52D",
      },
=======
      colors: {
        'primary': "#343131",
        'light-yellow' : "#FDE050",
        'dark-yellow' : "#FCC52D"
      }
>>>>>>> 9c4ea1bd0f22a5b8765f63b4330fb33659152815
    },
  },
  plugins: [],
};
