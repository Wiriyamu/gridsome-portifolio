const tailwind = require('tailwindcss')
const postcssPlugins = [
  tailwind()
]

module.exports = {
  siteName: 'Willian Silva - Desenvolvedor Front-End',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    }
  }
}