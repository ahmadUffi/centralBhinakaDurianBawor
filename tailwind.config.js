/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        BgWelcoming: "url('./src/assets/image/background.png')",
        BgCatalogDuren: "url('./src/assets/image/bgCatalogDuren.jpg')",
      },
      colors: {
        primary: "#343131",
        lightYellow: "#FDE050",
        darkYellow: "#FCC52D",
      },
    },
  },
  plugins: [],
};
