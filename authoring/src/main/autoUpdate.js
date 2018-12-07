import { autoUpdater } from 'electron-updater'

const autoUpdate = () => {
  autoUpdater.checkForUpdatesAndNotify()

  // check for updates every two hours
  setInterval(
    () => autoUpdater.checkForUpdatesAndNotify(),
    7.2e+6,
  )
}

export default autoUpdate
