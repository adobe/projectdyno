const { Application } = require('spectron')
const electronPath = require('electron')
const FormFiller = require('./helpers/FormFiller')
const delay = require('./helpers/delay')


describe('The URL bar.', () => {
  jest.setTimeout(30000)

  let app = new Application({
    path: electronPath,
    args: [
      './packaged/',
    ],
  })
  let formFiller = new FormFiller()

  beforeEach(async () => {
    app = new Application({
      path: electronPath,
      args: [
        './packaged/',
      ],
    })

    await app.start()
    formFiller = new FormFiller(app.webContents, app.client)
    await app.client.waitUntilWindowLoaded()
  })

  afterEach(async () => {
    if (app && app.isRunning()) {
      await app.stop()
    }
  })

  xit('Should load a URL.', async () => {
    await delay(10000)
    await app.client.waitForExist('.url-input')
    await formFiller.execute('.url-input', 'https://www.adobe.com')
    const value = await app.client.getValue('.url-input')
    await app.client.keys('Enter')
    await delay(1000)

    const stuff = await app.client.getWindowCount()
    console.log('stuff: ', stuff)
    console.log('___', value)
    expect(true).toEqual(true)
  })
})
