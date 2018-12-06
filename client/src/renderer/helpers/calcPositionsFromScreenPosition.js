const calcInfoBoxPositionFromTargetPosition = (position, infoBoxBounds) => {
  switch (position) {
    case 'top': {
      return {
        ...infoBoxBounds,
        left: (window.innerWidth * 0.5) - (infoBoxBounds.width * 0.5),
        top: 16,
      }
    }
    case 'topRight': {
      return {
        ...infoBoxBounds,
        left: window.innerWidth - infoBoxBounds.width - 16,
        top: 16,
      }
    }
    case 'right': {
      return {
        ...infoBoxBounds,
        left: window.innerWidth - infoBoxBounds.width - 16,
        top: (window.innerHeight * 0.5) - (infoBoxBounds.height * 0.5),
      }
    }
    case 'bottomRight': {
      return {
        ...infoBoxBounds,
        left: window.innerWidth - infoBoxBounds.width - 16,
        top: window.innerHeight - infoBoxBounds.height - 16,
      }
    }
    case 'bottom': {
      return {
        ...infoBoxBounds,
        left: (window.innerWidth * 0.5) - (infoBoxBounds.width * 0.5),
        top: window.innerHeight - infoBoxBounds.height - 16,
      }
    }
    case 'bottomLeft': {
      return {
        ...infoBoxBounds,
        left: 16,
        top: window.innerHeight - infoBoxBounds.height - 16,
      }
    }
    case 'left': {
      return {
        ...infoBoxBounds,
        left: 16,
        top: (window.innerHeight * 0.5) - (infoBoxBounds.height * 0.5),
      }
    }
    case 'topLeft': {
      return {
        ...infoBoxBounds,
        left: 16,
        top: 16,
      }
    }
    default: {
      return {
        ...infoBoxBounds,
        left: (window.innerWidth * 0.5) - (infoBoxBounds.width * 0.5),
        top: (window.innerHeight * 0.5) - (infoBoxBounds.height * 0.5),
      }
    }
  }
}

const calcPositionsFromScreenPosition = (data) => {
  const { targetPosition, infoBoxBounds } = data
  const infoBoxPosition = calcInfoBoxPositionFromTargetPosition(targetPosition, infoBoxBounds)

  return {
    arrowPosition: {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    },
    infoBoxPosition,
    anchorPosition: null,
    wasAdjusted: false,
  }
}

export default calcPositionsFromScreenPosition
