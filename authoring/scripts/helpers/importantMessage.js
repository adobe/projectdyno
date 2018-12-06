/* eslint no-console: 0 */
const chalk = require('chalk')

const importantMessage = (message, color = 'blue') => {
  const border = new Array(message.length).fill('-').join('')
  const borderColored = chalk[color](border)

  console.log('')
  console.log(borderColored)
  console.log(message)
  console.log(borderColored)
  console.log('')
}

module.exports = importantMessage
