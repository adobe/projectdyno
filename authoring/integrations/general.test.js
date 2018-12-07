const { Application } = require('spectron')
const electronPath = require('electron')
const { join } = require('path')
const delay = require('./helpers/delay')

jest.setTimeout(30000)

describe('Tour Guide general functionality.', () => {
  let app = new Application({
    path: electronPath,
    args: [
      './packaged/',
    ],
  })

  beforeEach(async () => {
    app = new Application({
      path: electronPath,
      args: [
        './packaged/',
      ],
    })

    await app.start()
    await app.client.waitUntilWindowLoaded()
  })

  afterEach(async () => {
    if (app && app.isRunning()) {
      await app.stop()
    }
  })

  it('Should run and open index.html.', async () => {
    const { webContents } = app
    const url = await webContents.getURL()
    const indexPath = `file://${join(process.cwd(), './packaged/index.html')}`

    expect(indexPath).toEqual(url)
  })

  it('Should be able to pase text.', async () => {
    const clipboardText = 'http://www.adobe.com'
    const urlSelector = '.url-input'
    const driver = app.client

    app.electron.clipboard.writeText(clipboardText)
    await driver.waitForExist(urlSelector)
    await driver.clearElement(urlSelector)
    await driver.click(urlSelector)
    app.webContents.paste()
    await delay(10)
    const urlValue = await driver.getValue(urlSelector)

    expect(urlValue).toEqual(clipboardText)
  })
})
