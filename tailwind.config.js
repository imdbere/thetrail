/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-brown": "#f2ece3",
        "light-brown": "#a59487",
        "middle-brown": "#735B4B",
        "dark-brown": "#0e0907",
        orange: "#EA892E",
      },
    },
  },
  plugins: [],
};
