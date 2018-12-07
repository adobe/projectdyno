/* eslint no-console: 0 */
const ora = require('ora')
const importantMessage = require('./importantMessage')

const runTask = async (
  task,
  taskArgs = [],
  runningMessage,
  successMessage,
  failedMessage,
  callback = null,
) => {
  const spinner = ora(runningMessage).start()

  try {
    const result = await task(...taskArgs)

    if (callback) {
      callback(result)
    }
  } catch (error) {
    spinner.fail(`${failedMessage}`)
    importantMessage('Build Failed!', 'red')
    console.error(error)
    console.log('')
    process.exit(1)
  }

  spinner.succeed(successMessage)
}

module.exports = runTask
