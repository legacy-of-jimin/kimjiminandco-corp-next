const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')


module.exports = withSass(withCSS({
  distDir: "functions/next",
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}))