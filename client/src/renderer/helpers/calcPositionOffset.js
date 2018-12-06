import {
  INFOBOX_ARROW_SIZE,
  INFOBOX_BORDER_RADIUS_DOUBLE,
} from '../CSSConfig'

const calcHorizontalOffset = (infoBoxBounds, arrowPosition) => {
  const min = INFOBOX_BORDER_RADIUS_DOUBLE
  const max = infoBoxBounds.width - (INFOBOX_ARROW_SIZE * 2) - INFOBOX_BORDER_RADIUS_DOUBLE
  let offset = 0

  if (arrowPosition.left < min) {
    offset = min - arrowPosition.left
  }
  if (arrowPosition.left > max) {
    offset = max - arrowPosition.left
  }

  return offset
}

const calcVerticalOffset = (infoBoxBounds, arrowPosition) => {
  const min = INFOBOX_BORDER_RADIUS_DOUBLE
  const max = infoBoxBounds.height - (INFOBOX_ARROW_SIZE * 2) - INFOBOX_BORDER_RADIUS_DOUBLE
  let offset = 0

  if (arrowPosition.top < min) {
    offset = min - arrowPosition.top
  }
  if (arrowPosition.top > max) {
    offset = max - arrowPosition.top
  }

  return offset
}

const calcPositionOffset = (
  data,
  position,
  arrowPosition,
) => {
  const {
    infoBoxBounds,
    anchorPosition,
  } = data

  if (anchorPosition === 'top' || anchorPosition === 'bottom') {
    const offset = calcHorizontalOffset(infoBoxBounds, arrowPosition)

    return {
      left: offset,
      top: 0,
    }
  }

  const offset = calcVerticalOffset(infoBoxBounds, arrowPosition)

  return {
    left: 0,
    top: offset,
  }
}

export default calcPositionOffset
