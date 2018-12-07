#!/usr/bin/env node
/* eslint no-console: 0 */

const builder = require('electron-builder')

const builderConfig = require('../electron-builder.json')
const runTask = require('./helpers/runTask')
const importantMessage = require('./helpers/importantMessage')
const welcome = require('./tasks/welcome')
const preBundle = require('./tasks/preBundle')
const bundle = require('./tasks/bundle')

/**
 * The main function that runs all the tasks.
 */
const main = async () => {
  await welcome()

  importantMessage('Preparing For Build')

  // prepare for bundeling
  // remove the packaged/ folder and copy resources/ to packaged/
  await runTask(
    preBundle,
    [],
    'Preparing for bundeling.',
    'Ready for bundeling.',
    'Failed to prepare for bundeling.',
  )

  // create JavaScript bundles
  await runTask(
    bundle,
    [],
    'Creating JavsScript bundles',
    'JavaScript bundles created.',
    'Failed to bundle JavaScript files',
  )

  importantMessage('Building Applicaiton')
  // create electron build
  await builder.build(builderConfig)

  importantMessage('😎   Success!!!', 'green')
}

main()
