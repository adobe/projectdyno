import JSZip from 'jszip'
import { app, dialog } from 'electron'
import { createWriteStream, readFile } from 'fs-extra'
import { resolve } from 'path'

const isDevelopment = process.env.NODE_ENV === 'development'
const appDir = isDevelopment ? process.cwd() : app.getAppPath()

const exportTours = async (state) => {
  const jsonState = JSON.stringify(state, null, 2)
  const filename = await dialog.showSaveDialog(
    null,
    {
      title: 'Export Tutorial',
      buttonLabel: 'Export',
      nameFieldLabel: 'File Name',
    },
  )
  const zipFilePath = `${filename.split('.')[0]}.zip`
  const initializationScript = `window.tourGuide = new window.TourGuide(${jsonState})`
  const readme = await readFile(resolve(appDir, './packaged/README.md'))
  const tourGuideScript = await readFile(resolve(appDir, './packaged/tour-guide.js'))
  const zip = new JSZip()

  zip
    .file('tour-guide-config.json', jsonState)
    .file('README.md', readme)
    .folder('tour-guide-scripts')
    .file('tour-guide-initializer.js', initializationScript)
    .file('tour-guide.js', tourGuideScript)

  await zip
    .generateNodeStream({ type: 'nodebuffer', streamFiles: true })
    .pipe(createWriteStream(zipFilePath))
}

export default exportTours
