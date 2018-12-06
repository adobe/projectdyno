#!/usr/bin/env node
/* eslint-disable */

/**
 * This script check to make sure that the system path contains the path "./node_modules/.bin".
 * It is important to have this in your system path because it makes running node binaries easier.
 */

const chalk = require('chalk')
const boxen = require('boxen')

const { PATH } = process.env
const hasNodeBin = /:\.\/node_modules\/\.bin/.test(PATH)

if (!hasNodeBin) {
  const message = `${chalk.yellow('WARNING: ./node_modules/.bin is not in your system path!!!')}

${chalk.reset(`For the best development experience, add the following line to your ~/.bash_profile or ~/.profile file:
export PATH="$PATH:./node_modules/.bin"`)}`
  const box = boxen(message, { padding: 1, margin: 1, borderStyle: 'double' })

  console.log(box)
}
