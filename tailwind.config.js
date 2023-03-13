/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      margin: {
        "22px": "22px",
      },
      padding: {
        "24px": "24px",
      },
      fontSize: {
        ss: "12px",
        mm: "14px",
        ll: "16px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      grays: "#F2F2F2",
      greens: "#0F8A69",

      // Primary
      primaryBlue: "#2F80ED",
      primaryGray: {
        900: "#4F4F4F",
        500: "#828282",
        200: "#E0E0E0",
      },
      // Indicator
      indicatorOrange: "#F8B76B",
      indicatorPurple: "#8785FF",
      indicatorRed: "#EB5757",
      indicatorYellow: "#F2C94C",

      // Chat
      ChatOrange: {
        900: "#E5A443",
        200: "#FCEED3",
      },
      ChatPurple: {
        900: "#9B51E0",
        200: "#EEDCFF",
      },
      ChatGreen: {
        900: "#43B78D",
        200: "#D2F2EA",
      },

      // Stiker
      stikerTeal: "#E9F3FF",
      stikerOrange: "#FDCFA4",
      stikerRed: "#F9E9C3",
      stikerCyan: "#AFEBDB",
      stikerEmerald: "#CBF1C2",
      stikerViolet: "#CFCEF9",
      stikerPurple: "#F9E0FD",
      // ...
    },
  },
  plugins: [require("flowbite/plugin")],
};
