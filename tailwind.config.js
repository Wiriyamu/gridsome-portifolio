module.exports = {
  purge: ['./src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'],
  theme: {
    screens: {
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
    },
    extend: {
      colors: {
        darken: '#151515',
        light: '#F3F7F9',
        card: '#202022',
        support: '#676868',
        vue: '#4FC08D',
        hover: '#8F84CA'
      },
      fontFamily: {
        sans: ['Poppins']
      },
      padding: {
        container: '0 2%'
      },
      margin: {
        custom: '500px'
      }
    },
  },
  variants: {},
  plugins: [],
}
