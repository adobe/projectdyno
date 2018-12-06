const delay = amount => new Promise((resolve) => {
  setTimeout(
    () => {
      resolve()
    },
    amount,
  )
})

module.exports = delay
