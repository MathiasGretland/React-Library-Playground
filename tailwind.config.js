// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        buttonTabBackgroundColorLight: "#F5F5F4",
        buttonTabBackgroundColorDark: "#292524",
        tabButtonBackgroundColorLight: "#FFFFFF",
        tabButtonBackgroundColorDark: "#0C0A09",
        tabButtonNotSelectedTextColorLight: "#78716C",
        tabButtonNotSelectedTextColorDark: "#A8A29E",
        githubButtonBackgroundColorLight: "#18181B",
        githubButtonBackgroundColorDark: "#FAFAFA",
        githubButtonTextColorLight: "#FAFAFA",
        githubButtonTextColorDark: "#18181B",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
    },
  },
  plugins: [],
};
