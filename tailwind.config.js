module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2e9be5",
        "secondary-color": "#9be52e",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
