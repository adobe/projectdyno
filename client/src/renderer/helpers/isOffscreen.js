const isOffScreen = (bounds) => {
  const hMin = 0
  const hMax = window.innerWidth
  const vMin = 0
  const vMax = window.innerHeight

  if (bounds.left < hMin) {
    return true
  }
  if (bounds.left + bounds.width > hMax) {
    return true
  }
  if (bounds.top < vMin) {
    return true
  }
  if (bounds.top + bounds.height > vMax) {
    return true
  }

  return false
}

export default isOffScreen
