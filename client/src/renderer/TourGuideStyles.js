import {
  BLUE,
  INFOBOX_ANIMATION_SPEED,
  INFOBOX_ARROW_SIZE,
  SHIM_MARGIN,
  TINKERBELL_SIZE,
} from './CSSConfig'
import {
  INFOBOX_ARROW,
  INFOBOX_IMAGE_WRAPPER,
  INFOBOX_MAIN,
  INFOBOX_WRAPPER,
  SHIM,
  SHIM_HOLE,
  SHIM_HOLE_BORDER_TL,
  SHIM_HOLE_BORDER_TR,
  SHIM_HOLE_BORDER_BL,
  SHIM_HOLE_BORDER_BR,
  TINKERBELL,
} from './CSSSelectors'
import { BLUE_THEME } from './themeTypes'
import calcPositionsFromElement from './helpers/calcPositionsFromElement'
import calcPositionsFromScreenPosition from './helpers/calcPositionsFromScreenPosition'

const arrowStyles = (anchorPosition, arrowPosition, theme) => {
  const arrowColor = theme === BLUE_THEME ? BLUE : 'white'

  switch (anchorPosition) {
    case 'left': return `
      border-width:
        ${INFOBOX_ARROW_SIZE}px
        0
        ${INFOBOX_ARROW_SIZE}px
        ${INFOBOX_ARROW_SIZE}px;
      border-color:
        transparent
        transparent
        transparent
        ${arrowColor};
      left: 100%;
      top: ${arrowPosition.top}px;
    `
    case 'top': return `
      border-width:
        ${INFOBOX_ARROW_SIZE}px
        ${INFOBOX_ARROW_SIZE}px
        0
        ${INFOBOX_ARROW_SIZE}px;
      border-color:
        ${arrowColor}
        transparent
        transparent
        transparent;
      left: ${arrowPosition.left}px;
      top: 100%;
    `
    case 'right': return `
      border-width:
        ${INFOBOX_ARROW_SIZE}px
        ${INFOBOX_ARROW_SIZE}px
        ${INFOBOX_ARROW_SIZE}px
        0;
      border-color:
        transparent
        ${arrowColor}
        transparent
        transparent;
      left: ${-INFOBOX_ARROW_SIZE}px;
      top: ${arrowPosition.top}px;
    `
    default: return `
      border-width:
        0
        ${INFOBOX_ARROW_SIZE}px
        ${INFOBOX_ARROW_SIZE}px
        ${INFOBOX_ARROW_SIZE}px;
      border-color:
        transparent
        transparent
        ${arrowColor}
        transparent;
      left: ${arrowPosition.left}px;
      top: ${-INFOBOX_ARROW_SIZE}px;
    `
  }
}

const generateClipMapPolygon = (shimBounds) => {
  const shimX = shimBounds.left
  const shimY = shimBounds.top
  const shimWidth = shimBounds.width
  const shimHeight = shimBounds.height

  return `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${shimBounds.left}px ${shimY}px, ${shimX}px ${shimY + shimHeight}px, ${shimX + shimWidth}px ${shimY + shimHeight}px, ${shimX + shimWidth}px ${shimY}px, ${shimX - 1}px ${shimY}px, 0% 0%)`
}

const calcCoachmarkPositions = (data) => {
  const {
    coachMark,
    coachMarkCount,
    currentCoachMarkIndex,
    infoBoxElement,
    targetElement,
  } = data
  const {
    media,
    progressOnDomEvent,
    targetPosition,
  } = coachMark
  const rawInfoBoxBounds = infoBoxElement.getBoundingClientRect()
  const infoBoxBounds = {
    ...rawInfoBoxBounds,
    height: rawInfoBoxBounds.height + (media ? media.height : 0),
    width: rawInfoBoxBounds.width,
  }
  const progressOnDomEventTarget = progressOnDomEvent ? progressOnDomEvent.targetSelector : null
  const progressOnDomEventElement = document.querySelector(progressOnDomEventTarget)
  const targetBounds = targetElement.getBoundingClientRect()
  const progressOnDomEventTargetBounds = progressOnDomEventTarget ?
    progressOnDomEventElement.getBoundingClientRect()
    : null
  const shimBounds = {
    left: Math.round(targetBounds.left - SHIM_MARGIN),
    top: Math.round(targetBounds.top - SHIM_MARGIN),
    width: Math.round(targetBounds.width + SHIM_MARGIN + SHIM_MARGIN),
    height: Math.round(targetBounds.height + SHIM_MARGIN + SHIM_MARGIN),
  }
  const tinkerbellPosition = progressOnDomEventTargetBounds ? {
    left: targetBounds.left
      + (progressOnDomEventTargetBounds.width * 0.5)
      - (TINKERBELL_SIZE * 0.5),
    top: targetBounds.top
      + (progressOnDomEventTargetBounds.height * 0.5)
      - (TINKERBELL_SIZE * 0.5),
  } : null

  const positionConfig = {
    ...coachMark,
    count: coachMarkCount,
    currentId: currentCoachMarkIndex,
    infoBoxBounds,
    targetBounds,
    targetPosition,
  }

  if (targetPosition) {
    return {
      ...calcPositionsFromScreenPosition(positionConfig),
      tinkerbellPosition,
      shimBounds: {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      },
    }
  }

  return {
    ...calcPositionsFromElement(positionConfig),
    tinkerbellPosition,
    shimBounds,
  }
}

let actionDispatchTimer

const TourGuideStyles = {
  view: (node) => {
    const infoBoxElement = document.querySelector(INFOBOX_MAIN)
    const {
      attrs,
    } = node
    const {
      actions,
      coachMark,
      coachMarkPostionIsAdjusted,
      targetElement,
      theme,
      willAnimate,
    } = attrs

    // abort the render process if the necessary elements are unavailable
    if (!infoBoxElement || !targetElement) {
      return null
    }

    const {
      dimBackground,
    } = coachMark
    const {
      anchorPosition,
      arrowPosition,
      infoBoxPosition,
      shimBounds,
      tinkerbellPosition,
      wasAdjusted,
    } = calcCoachmarkPositions({ ...attrs, infoBoxElement })

    // dispatch actions to update the status of
    // wether or not the coach mark postion needed to be adjusted
    // this is one here because the postion of the coach mark needed
    // to be calculated in order for this be determined
    // TODO use a better method for debouncing
    if (coachMarkPostionIsAdjusted !== wasAdjusted) {
      clearTimeout(actionDispatchTimer)

      // this action dispatch is debounced to reduce render calls.
      actionDispatchTimer = setTimeout(
        () => {
          actions.coachMarkPostionIsAdjusted(wasAdjusted)
        },
        50,
      )
    }

    const animationSpeed = willAnimate ? INFOBOX_ANIMATION_SPEED : 0

    return `
      ${INFOBOX_WRAPPER} {
        position: fixed;
        left: ${infoBoxPosition.left}px;
        top: ${infoBoxPosition.top}px;
        filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.2)) drop-shadow(0px 0px 40px rgba(0,0,0,0.1));
        transition:
          left ${animationSpeed},
          top ${animationSpeed};
      }

      ${INFOBOX_IMAGE_WRAPPER} {
        width: 100%;
        transition:
          width ${animationSpeed},
          height ${animationSpeed};
      }

      ${INFOBOX_ARROW} {
        background: transparent;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        ${arrowStyles(anchorPosition, arrowPosition, theme)}
      }

      ${SHIM} {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        background: black;
        opacity: ${dimBackground ? 0.65 : 0};
        pointer-events: ${dimBackground ? 'auto' : 'none'};
        top: 0px;
        left: 0px;
        clip-path: ${generateClipMapPolygon(shimBounds)};
        transition: clip-path ${animationSpeed}, opacity ${animationSpeed};
      }

      ${SHIM_HOLE} {
        display: block;
        position: fixed;
        left: ${shimBounds.left}px;
        top: ${shimBounds.top}px;
        width: ${shimBounds.width}px;
        height: ${shimBounds.height}px;
        pointer-events: none;
        opacity: ${dimBackground ? 0.65 : 0};
        transition: top ${animationSpeed}, left ${animationSpeed}, width ${animationSpeed}, height ${animationSpeed}, opacity ${animationSpeed};
      }

      ${SHIM_HOLE_BORDER_TL} {
        position: absolute;
        top: 0px;
        left: 0px;
        fill: black;
      }

      ${SHIM_HOLE_BORDER_TR} {
        position: absolute;
        top: 0px;
        right: 0px;
        fill: black;
      }

      ${SHIM_HOLE_BORDER_BL} {
        position: absolute;
        bottom: 0px;
        left: 0px;
        fill: black;
      }

      ${SHIM_HOLE_BORDER_BR} {
        position: absolute;
        bottom: 0px;
        right: 0px;
        fill: black;
      }

      ${TINKERBELL} {
        display: block;
        position: fixed;
        left: ${tinkerbellPosition ? tinkerbellPosition.left : 0}px;
        top: ${tinkerbellPosition ? tinkerbellPosition.top : 0}px;
        width: ${TINKERBELL_SIZE}px;
        height: ${TINKERBELL_SIZE}px;
        pointer-events: none;
        mix-blend-mode: hard-light;
        opacity: 0.9;
        animation: tinkerbellReveal 0.3S;
      }
      `
  },
}

export default TourGuideStyles
