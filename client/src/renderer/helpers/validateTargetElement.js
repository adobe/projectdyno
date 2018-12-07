const validateTargetElement = (targetElement) => {
  if (!targetElement) return false

  const bounds = targetElement.getBoundingClientRect()
  const targetArea = bounds.width * bounds.height

  if (targetArea > 0) return true

  return false
}

export default validateTargetElement
