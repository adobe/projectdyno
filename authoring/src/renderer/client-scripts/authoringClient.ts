const authoringClient = () => {
  const { ipcRenderer } = require('electron')

  console.log('just test')
  console.log('ipc renderer: ', ipcRenderer)
}

export default authoringClient.toString()
