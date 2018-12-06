import Zip from 'adm-zip'
import { dialog } from 'electron'

const importTours = async (mainWindow) => {
  console.log('import tours...')
  const filenames = await dialog.showOpenDialog(
    null,
    {
      title: 'Import Tutorial',
      buttonLabel: 'Import',
      nameFieldLabel: 'File Name',
    },
  )
  console.log('file names: ', filenames)
  if (!filenames) {
    return
  }
  const zipFileName = filenames[0]
  // TODO validate file

  const contents = new Zip(zipFileName)
  const zipEntries = contents.getEntries()
  const configEntry = zipEntries.filter(entry => entry.name === 'tour-guide-config.json')[0]
  const config = contents.readAsText(configEntry)

  mainWindow.webContents.send('tour-guide', {
    type: 'EDITOR_TOURS_IMPORTED',
    payload: config,
  })
}

export default importTours
