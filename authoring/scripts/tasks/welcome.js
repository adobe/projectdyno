/* eslint no-console: 0 */

const figlet = require('figlet')
const chalk = require('chalk')

const welcome = () => new Promise((resolve, reject) => {
  figlet.text(
    'Tour Guide',
    {
      font: 'Avatar',
    },
    (err, data) => {
      if (err) {
        reject(err)
      }

      console.log('')
      console.log(chalk.blue(data))
      console.log('Tour Guide Authoring Builder')
      resolve('success')
    },
  )
})

module.exports = welcome
