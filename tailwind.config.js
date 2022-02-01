import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/renderer/*.{tsx, ts, js, jsx}'],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
