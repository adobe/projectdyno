import {
  INFOBOX_ARROW_SIZE,
  INFOBOX_ARROW_SIZE_DOUBLE,
} from '../CSSConfig'

const calcHorizontalPosition = ({
  targetBounds,
  infoBoxBounds,
  align,
}) => {
  switch (align) {
    case 'end': {
      return infoBoxBounds.width - INFOBOX_ARROW_SIZE - (targetBounds.width * 0.5)
    }
    case 'center': {
      return (infoBoxBounds.width * 0.5) - INFOBOX_ARROW_SIZE
    }
    default: {
      return -INFOBOX_ARROW_SIZE + (targetBounds.width * 0.5)
    }
  }
}

const calcVerticalPosition = ({
  targetBounds,
  infoBoxBounds,
  align,
}) => {
  switch (align) {
    case 'end': {
      return infoBoxBounds.height - INFOBOX_ARROW_SIZE - (targetBounds.height * 0.5)
    }
    case 'center': {
      return (infoBoxBounds.height * 0.5) - INFOBOX_ARROW_SIZE
    }
    default: {
      return -INFOBOX_ARROW_SIZE + (targetBounds.height * 0.5)
    }
  }
}

const calcInfoBoxArrowPosition = (data) => {
  const {
    anchorPosition,
    infoBoxBounds,
  } = data

  switch (anchorPosition) {
    case 'left': {
      return {
        height: INFOBOX_ARROW_SIZE_DOUBLE,
        left: infoBoxBounds.width - 1,
        top: calcVerticalPosition(data),
        width: INFOBOX_ARROW_SIZE,
      }
    }
    case 'top': {
      return {
        height: INFOBOX_ARROW_SIZE,
        left: calcHorizontalPosition(data),
        top: infoBoxBounds.height - 1,
        width: INFOBOX_ARROW_SIZE_DOUBLE,
      }
    }
    case 'right': {
      return {
        height: INFOBOX_ARROW_SIZE_DOUBLE,
        left: -INFOBOX_ARROW_SIZE + 1,
        top: calcVerticalPosition(data),
        width: INFOBOX_ARROW_SIZE,
      }
    }
    default: {
      return {
        height: INFOBOX_ARROW_SIZE,
        left: calcHorizontalPosition(data),
        top: -INFOBOX_ARROW_SIZE + 1,
        width: INFOBOX_ARROW_SIZE_DOUBLE,
      }
    }
  }
}

export default calcInfoBoxArrowPosition
