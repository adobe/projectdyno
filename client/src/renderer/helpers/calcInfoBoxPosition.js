import {
  INFOBOX_ARROW_SIZE,
  INFOBOX_PLACEMENT_GAP,
} from '../CSSConfig'

const calcAlignedHorizontalPosition = ({
  targetBounds,
  infoBoxBounds,
  align,
}) => {
  switch (align) {
    case 'end': {
      return targetBounds.right -
                infoBoxBounds.width
    }
    case 'center': {
      return targetBounds.right -
                (targetBounds.width * 0.5) -
                (infoBoxBounds.width * 0.5)
    }
    default: {
      return targetBounds.left
    }
  }
}

const calcAlignedVerticalPosition = ({
  targetBounds,
  infoBoxBounds,
  align,
}) => {
  switch (align) {
    case 'end': {
      return targetBounds.bottom -
                infoBoxBounds.height
    }
    case 'center': {
      return targetBounds.bottom -
                (targetBounds.height * 0.5) -
                (infoBoxBounds.height * 0.5)
    }
    default: {
      return targetBounds.top
    }
  }
}

const calcInfoBoxPosition = (data) => {
  const {
    targetBounds,
    infoBoxBounds,
    anchorPosition,
  } = data

  switch (anchorPosition) {
    case 'left': {
      return {
        height: infoBoxBounds.height,
        left: targetBounds.left -
                    infoBoxBounds.width -
                    INFOBOX_ARROW_SIZE -
                    INFOBOX_PLACEMENT_GAP,
        top: calcAlignedVerticalPosition(data),
        width: infoBoxBounds.width,
      }
    }
    case 'top': {
      return {
        height: infoBoxBounds.height,
        left: calcAlignedHorizontalPosition(data),
        top: targetBounds.top -
                    infoBoxBounds.height -
                    INFOBOX_ARROW_SIZE -
                    INFOBOX_PLACEMENT_GAP,
        width: infoBoxBounds.width,
      }
    }
    case 'right': {
      return {
        height: infoBoxBounds.height,
        left: targetBounds.right +
                    INFOBOX_ARROW_SIZE +
                    INFOBOX_PLACEMENT_GAP,
        top: calcAlignedVerticalPosition(data),
        width: infoBoxBounds.width,
      }
    }
    default: {
      return {
        height: infoBoxBounds.height,
        left: calcAlignedHorizontalPosition(data),
        top: targetBounds.bottom +
                    INFOBOX_ARROW_SIZE +
                    INFOBOX_PLACEMENT_GAP,
        width: infoBoxBounds.width,
      }
    }
  }
}

export default calcInfoBoxPosition
