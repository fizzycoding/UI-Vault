/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      gridAutoRows: {
        "min-content": "min-content",
      },
      utilities: {
        ".break-inside-avoid": {
          breakInside: "avoid",
        },
      },
      fontFamily: {
        segoe: ['"Segoe UI Regular"', "sans-serif"],
        segoeItalic: ['"Segoe UI Italic"', "sans-serif"],
        segoeBold: ['"Segoe UI Bold"', "sans-serif"],
        segoeBoldItalic: ['"Segoe UI Bold Italic"', "sans-serif"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(180deg, rgba(80,77,247,0.1) 0%, rgba(80,77,247,0.2) 100%);",
        senderGradient:
          "linear-gradient(180deg, rgba(87,87,87,0.05) 0%, rgba(87,87,87,0.1) 100%);",
      },
      fontSize: {
        "2xs": "0.625rem", // 10px
        "3xs": "0.5rem", // 8px
        "4xs": "0.375rem", // 6px
      },
      colors: {
        primary: "#504DF7",
        secondary: "#575757",
        dark:{
          DEFAULT: "#050505",
          light10: "#111111",
          light20: "#1d1d1d",
          light30: "#282828",
          light40: "#333333",
          light50: "#3f3f3f",
          light60: "#4d4d4d",
          light70: "#595959",
          light80: "#666666",
          light90: "#737373",
          light95: "#808080",
        },
        texts: {
          DEFAULT: "#1d1d1d", // Main text color
          dark: "#ffffff",
          light10: "#2e2e2e", // 10% lighter
          light20: "#3f3f3f", // 20% lighter
          light30: "#505050", // 30% lighter
          light40: "#616161", // 40% lighter
          light50: "#737373", // 50% lighter
          light60: "#858585", // 60% lighter
          light70: "#969696", // 70% lighter
          light80: "#a8a8a8", // 80% lighter
          light90: "#b9b9b9", // 90% lighter
          light95: "#cccccc", // 95% lighter
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
