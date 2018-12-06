const { copy, remove } = require('fs-extra')

const preBundle = async () => {
  await remove('./packaged')
  await copy('./resources', './packaged')
}

module.exports = preBundle
