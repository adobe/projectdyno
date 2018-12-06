/* eslint no-underscore-dangle: 0 */

import { app, BrowserWindow, ipcMain, Menu, session } from 'electron'
import { resolve } from 'path'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer'
import exportTours from './exportTours'
import importTours from './importTours'
import autoUpdate from './autoUpdate'

const isDevelopment = process.env.NODE_ENV === 'development'
const appDir = isDevelopment ? process.cwd() : app.getAppPath()
const isWindows = process.platform === 'win32'
// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow() {
  const browserOptions = {
    width: 1400,
    height: 850,
    titleBarStyle: 'hiddenInset',

    webPreferences: {
      // TODO revisit security implications of node integration.
      nodeIntegration: true,
      webviewTag: true,
      // TODO figure out how to do cors without disabeling websecruity.
      webSecurity: false,
    },
  }

  const window = new BrowserWindow(browserOptions)
  if (isWindows) {
    window.setMenu(null)
  }

  const windowUrl = resolve(appDir, 'packaged/index.html')

  window.loadURL(`file://${windowUrl}`)

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// handle export actions
ipcMain.on('tour-guide', (evt, args) => {
  switch (args.type) {
    case 'EDITOR_EXPORT_TOURS': {
      exportTours(args.payload)
      break
    }
    case 'EDITOR_IMPORT_TOURS': {
      importTours(mainWindow)
      break
    }
    default: {
      break
    }
  }
})

// quit application when all windows are closed
app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

const installExtensions = async () => {
  await installExtension(REACT_DEVELOPER_TOOLS)
  await installExtension(REDUX_DEVTOOLS)
}

// create main BrowserWindow when electron is ready
app.on('ready', async () => {
  session.defaultSession.allowNTLMCredentialsForDomains('*')

  if (isDevelopment) {
    await installExtensions()
  }
  mainWindow = createMainWindow()
  mainWindow.tourGuideScriptPath = resolve(appDir, 'packaged/tour-guide.js')
  mainWindow.imagePath = resolve(appDir, 'packaged/img/')
  mainWindow.preloadPath = resolve(appDir, 'packaged/')
  mainWindow.appdir = __dirname

  // check for updates
  autoUpdate()

  // setup menus
  if (!isDevelopment) {
    const menuTemplate = [
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { type: 'separator' },
          { role: 'quit' },
        ],
      },
    ]

    const menu = isWindows ? null : Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(menu)
  }
})
