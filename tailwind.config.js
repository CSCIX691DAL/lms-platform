module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "navy-blue": "#091725",
        "dark-navy-blue": "#000A14",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
