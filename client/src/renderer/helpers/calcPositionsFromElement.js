import calcInfoBoxArrowPosition from './calcInfoBoxArrowPosition'
import calcInfoBoxPosition from './calcInfoBoxPosition'
import calcPositionOffset from './calcPositionOffset'
import isOffScreen from './isOffscreen'

const anchorPositions = ['top', 'right', 'bottom', 'left']
const alignments = ['start', 'center', 'end']

const calcPositionsFromElement = (data, retryCount = 0) => {
  const arrowPosition = calcInfoBoxArrowPosition(data)
  const infoBoxPosition = calcInfoBoxPosition(data)
  const offset = calcPositionOffset(data, infoBoxPosition, arrowPosition)
  const willRetry = isOffScreen(infoBoxPosition)
  let positions = {
    anchorPosition: data.anchorPosition,
    arrowPosition: {
      ...arrowPosition,
      left: arrowPosition.left + offset.left,
      top: arrowPosition.top + offset.top,
    },
    infoBoxPosition: {
      ...infoBoxPosition,
      left: infoBoxPosition.left - offset.left,
      top: infoBoxPosition.top - offset.top,
    },
    wasAdjusted: retryCount > 0,
  }

  if (retryCount < 12 && willRetry) {
    const anchorIndex = anchorPositions.indexOf(data.anchorPosition)
    const alignmentIndex = alignments.indexOf(data.align)
    const newAnchorPosition = anchorPositions[(anchorIndex + 1) % anchorPositions.length]
    const newAlignment = retryCount % 4 === 3
      ? alignments[(alignmentIndex + 1) % alignments.length]
      : data.align
    const newData = {
      ...data,
      align: newAlignment,
      anchorPosition: newAnchorPosition,
    }

    positions = calcPositionsFromElement(newData, retryCount + 1)
  }

  return positions
}

export default calcPositionsFromElement
