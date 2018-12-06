const delay = require('./delay')

class FormFiller {
  /**
   * Contructor for the form filler
   * @param {webContent} webContents - Reference to an Electron webcontents object.
   * @param {client} driver - A reference to a WebdriverIO client.
   */
  constructor(webContents, driver) {
    this.webContents = webContents
    this.driver = driver
  }

  /**
   * Fills a specified input with the provided text.
   * @param {string} selector - The css selector for the input field.
   * @param {*} text - The text that will be inputed.
   */
  async execute(selector, text) {
    const { webContents, driver } = this
    const splitText = text.split('')

    await driver.click(selector)
    await driver.clearElement(selector)

    for (const character of splitText) {
      webContents.sendInputEvent({
        keyCode: character,
        type: 'char',
      })
      await delay(10)
    }
  }
}

module.exports = FormFiller
