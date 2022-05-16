module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  prefix: "wf-",
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
};
