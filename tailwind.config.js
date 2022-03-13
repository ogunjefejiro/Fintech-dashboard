module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#017189",
          "primary-focus": "#017999",
          "primary-content": "#ffffff",
          secondary: "#2B899D",
          "secondary-focus": "#2B999D",
          "secondary-content": "#ffffff",
          accent: "#FDA4AF",
          "accent-focus": "#FDA8AF",
          "accent-content": "#ffffff",
          info: "#2094f3",
          success: "#00B2A0",
          warning: "#ff9900",
          error: "#FF3B00",
        },
      },
    ],
  },
};
