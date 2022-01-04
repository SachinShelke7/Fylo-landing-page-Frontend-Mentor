module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          'darkBlue': 'hsl(243, 87%, 12%)',
          'desatBlue': 'hsl(238, 22%, 44%)',
          'brightBlue': 'hsl(224, 93%, 58%)',
          'moderateCyan': 'hsl(170, 45%, 43%)',
          'lightGrayBlue': 'hsl(240, 75%, 98%)',
          'lightGray': 'hsl(0, 0%, 75%)',
        },
        fontFamily: {
          'raleway': ['"Raleway"', 'sans-serif']
        }
    },
  },
  plugins: [],
}