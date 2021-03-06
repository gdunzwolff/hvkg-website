module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    extend: {
      colors: {
        kleistBlauGreen: 'hsl(195, 100%, 29%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        kleistBlauGrayscaleVersion: 'hsl(0, 0%, 26%)',
        kleistBlauComplementRotbraun: 'hsl(15, 100%, 29%)',
      },
      fontFamily: {
        gara: ['Palatino'],
        garaitalic: ['Palatino-Italic']
      },
    },
  },
  plugins: [],
}
