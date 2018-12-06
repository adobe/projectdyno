#!/usr/bin/env node
/* eslint no-console: 0 */

process.env.NODE_ENV = 'development'

const electron = require('electron-connect').server.create()

const watch = require('node-watch')
const runTask = require('./helpers/runTask')
const preBundle = require('./tasks/preBundle')
const bundle = require('./tasks/bundle')

const filter = file => /^src\/|^resources\//.test(file)

let isStarted = false

const startApp = () => {
  if (!isStarted) {
    electron.start('./packaged')
    isStarted = true
  }
}

const stopApp = () => {
  electron.restart()
}

// TODO create start electron task!
const defualtBuildQueue = [
  {
    task: preBundle,
    taskArgs: [],
    runningMessage: 'Preparing for bundeling.',
    successMessage: 'Ready for bundeling.',
    failedMessage: 'Failed to prepare for bundeling.',
  },
  {
    task: bundle,
    taskArgs: [],
    runningMessage: 'Creating JavsScript bundles',
    successMessage: 'JavaScript bundles created.',
    failedMessage: 'Failed to bundle JavaScript files',
  },
  {
    task: stopApp,
    taskArgs: [],
    runningMessage: 'Stopping App.',
    successMessage: 'Stopped App.',
    failedMessage: 'Failed to stop app.',
  },
  {
    task: startApp,
    taskArgs: [process.cwd()],
    runningMessage: 'Starting App.',
    successMessage: 'Started App.',
    failedMessage: 'Failed to start app.',
  },
]
let isDirty = false
let isBuilding = false
let buildQueue = []

const dirtyCheck = () => {
  if (isDirty) {
    buildQueue = [...defualtBuildQueue]
    isDirty = false
  }
}

const build = async () => {
  isBuilding = true
  buildQueue = [...defualtBuildQueue]

  while (isBuilding) {
    const {
      task,
      taskArgs,
      runningMessage,
      successMessage,
      failedMessage,
      callback,
    } = buildQueue.shift()

    await runTask(
      task,
      taskArgs,
      runningMessage,
      successMessage,
      failedMessage,
      callback,
    )
    dirtyCheck()
    if (buildQueue.length === 0) {
      isBuilding = false
    }
  }
}

const start = () => {
  watch('./', { recursive: true, filter }, (evt, name) => {
    console.log('files changed...', name)
    if (isBuilding) {
      isDirty = true
    } else {
      build()
    }
  })

  build()
}

start()
