const tailwind = require('tailwindcss')
const postcssPlugins = [
  tailwind()
]

module.exports = {
  siteName: '',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    }
  }
}