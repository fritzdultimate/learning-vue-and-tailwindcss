const plugin = require('tailwindcss/plugin');
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
  plugins: [
    // eslint-disable-next-line global-require
    // require('@tailwindcss/forms'),
    
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ],
};
