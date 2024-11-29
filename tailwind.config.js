/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        customSm: "500px"
      },
      backgroundImage: {
        'BgWelcoming': "url('./src/assets/image/background.png')",
        'BgCatalogDuren': "url('./src/assets/image/bgCatalogDuren.jpg')",
        'bgHeaderProduct': "url('./src/assets/image/bg-header-product.svg')"
      },
      colors: {
        'primary': "#343131",
        'lightYellow': "#FDE050",
        'darkYellow': "#FCC52D",
      },
      borderColor: {
        'primary': "#343131",
        'lightYellow': "#FDE050",
        'darkYellow': "#FCC52D",
      },
    },
  },
  plugins: [],
};
