const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        karla: [`Karla`, ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {},
  plugins: [
    require(`@tailwindcss/typography`),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: `Karla`,
            src: `url("/fonts/Karla-Regular.ttf")`,
            fontStyle: `normal`,
            fontWeight: `400`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Karla`,
            src: `url("/fonts/Karla-Italic.ttf")`,
            fontStyle: `italic`,
            fontWeight: `400`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Karla`,
            src: `url("/fonts/Karla-Bold.ttf")`,
            fontStyle: `bold`,
            fontWeight: `600`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Karla`,
            src: `url("/fonts/Karla-ExtraBold.ttf")`,
            fontStyle: `extraBold`,
            fontWeight: `800`,
            fontDisplay: `swap`,
          }
        },
      ])
    },
  ],
};
