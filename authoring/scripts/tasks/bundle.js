const webpack = require('webpack')
const config = require('../../webpack.config')

const bundle = () => new Promise((resolve, reject) => {
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      if (err) {
        reject(err.stack || err)
      }

      if (stats.hasErrors()) {
        const info = stats.toJson()
        const errorMessage = info.errors.reduce(
          (message, error) => `${message}\n${error}`,
          '',
        )

        reject(errorMessage)
      }

      reject(new Error('failed'))
    }

    resolve('success')
  })
})

module.exports = bundle
