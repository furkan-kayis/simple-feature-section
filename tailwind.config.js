/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        custom: {
          "blue-100": "#DEE9FC",
          "rose-100": "#FBE5E6",
          "orange-100": "#FCEED8",
          "gray-200": "#E5E7EB",
          "gray-300": "#D2D5DA",
          "gray-400": "#9DA3AE",
          "gray-800": "#212936",
          "gray-900": "#121826",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-image": "url('/Background_image.svg')",
      },
    },
  },
  plugins: [],
};
