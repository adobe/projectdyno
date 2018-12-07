const { Application } = require('spectron')
const electronPath = require('electron')
const FormFiller = require('./helpers/FormFiller')
// const delay = require('./helpers/delay')

describe('The Tour Editor', () => {
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

  it('Should successfully create a new tour.', async () => {
    const driver = app.client
    const showModalSelector = '.main .editor .spectrum-Button--cta'
    const inputTourNameSelector = '.tour-modal input.spectrum-Textfield'
    const createTourSelector = '.tour-modal .spectrum-Button--cta'
    const newTourName = 'New Test Tour'

    await driver.waitForExist(showModalSelector, 10000)
    await driver.click(showModalSelector)
    await driver.waitForVisible(inputTourNameSelector)
    await formFiller.execute(inputTourNameSelector, newTourName)
    await driver.click(createTourSelector)
    await driver.waitForExist('.coachMark')
    const headerText = await driver.getText('.editor .header .title')

    expect(headerText).toEqual(newTourName)
  })
})
