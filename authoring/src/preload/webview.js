/* global tourGuide */
const { ipcRenderer } = require('electron')
const { createElement: e } = require('react')
const { render } = require('react-dom')
const CssSelectorGenerator = require('css-selector-generator')
require('../../resources/tour-guide')

const defaultTourGuideConfig = {
  currentCoachMarkIndex: 0,
  currentTourIndex: 0,
  tours: [
    {
      title: 'New Tour',
      coachMarks: [
        {
          align: 'center',
          anchorPosition: 'top',
          description: '',
          navButtons: [],
          targetSelector: '',
          title: '',
        },
      ],
    },
  ],
}

const onEditorMessage = (evt, action) => {
  const { tourGuide } = window

  if (tourGuide) {
    tourGuide.showTourGuide()

    switch (action.type) {
      case 'EDITOR_ADD_COACH_MARK': {
        tourGuide.addCoachMark({
          title: '',
          description: '',
          anchorPosition: 'top',
          align: 'center',
          navButtons: ['back'],
          targetSelector: '',
          dimBackground: true,
        })

        const tourGuideState = tourGuide.store.getState()
        const { currentTourIndex } = tourGuideState
        const currentTour = tourGuideState.tours[currentTourIndex]
        const coachMarkCount = currentTour.coachMarks.length

        tourGuide.setCurrentCoachMark(coachMarkCount - 1)
        break
      }
      case 'EDITOR_ADD_TOUR': {
        const state = tourGuide.store.getState()
        const tourCount = state.tours.length

        tourGuide.addTour({
          title: action.payload,
          coachMarks: [{
            align: 'center',
            anchorPosition: 'top',
            description: '',
            navButtons: [],
            targetSelector: '',
            title: '',
            dimBackground: true,
          }],
        })
        tourGuide.setCurrentTour(tourCount)
        break
      }
      case 'EDITOR_REMOVE_COACH_MARK': {
        tourGuide.removeCoachMark(action.payload)
        break
      }
      case 'EDITOR_REMOVE_TOUR': {
        tourGuide.removeTour(action.payload)
        break
      }
      case 'EDITOR_SET_ACTIVE_COACH_MARK': {
        tourGuide.setCurrentCoachMark(action.payload)
        break
      }
      case 'EDITOR_SET_ACTIVE_TOUR': {
        tourGuide.setCurrentTour(action.payload)
        break
      }
      case 'EDITOR_MODIFY_COACH_MARK_ATTRIBUTES': {
        tourGuide.modifyCoachMarkAttributes(
          action.payload.attributes,
          action.payload.coachMarkId,
          action.payload.tourId,
        )
        break
      }
      case 'EDITOR_MODIFY_TOUR_ATTRIBUTES': {
        tourGuide.modifyTourAttributes(
          action.payload.attributes,
          action.payload.tourId,
        )
        break
      }
      case 'EDITOR_START_SELECTOR': {
        const cb = action.payload === 'PLACEMENT' ?
          targetSelector => handlePlacementSelector(targetSelector) :
          targetSelector => handleProgressSelector(targetSelector)

        startSelector(cb)
        break
      }
      case 'EDITOR_STOP_SELECTOR': {
        stopSelector()
        break
      }
      case 'EDITOR_TOURS_IMPORTED': {
        tourGuide.setState(action.payload)
        break
      }
      default: {
        break
      }
    }
  } else {
    switch (action.type) {
      case 'EDITOR_INITIALIZE_TOUR_GUIDE': {
        loadTourGuideScript(defaultTourGuideConfig)
        break
      }
      case 'EDITOR_TOURS_IMPORTED': {
        loadTourGuideScript(action.payload)
        break
      }
      default: {
        break
      }
    }
  }
}

const onTourGuideUpdated = () => {
  if (tourGuide) {
    const state = tourGuide.store.getState()

    ipcRenderer.sendToHost('tour-guide', {
      type: 'EDITOR_TOUR_GUIDE_UPDATED',
      payload: {
        state,
      },
    })
  }
}

const subscribeToTourGuideStore = () => {
  if (tourGuide && onTourGuideUpdated) {
    tourGuide.store.subscribe(onTourGuideUpdated)
  }
}

const loadTourGuideScript = async (config) => {
  // initialize Tour Guide
  window.tourGuide = new window.TourGuide(config)
  subscribeToTourGuideStore()
  onTourGuideUpdated()
}

const onPageLoad = async () => {
  if (!window.tourGuide) {
    ipcRenderer.sendToHost('tour-guide', {
      type: 'EDITOR_CLEAR_TOUR_GUIDE_STATE',
    })
  } else {
    subscribeToTourGuideStore()
    onTourGuideUpdated()
  }
  ipcRenderer.removeListener('tour-guide', onEditorMessage)
  ipcRenderer.addListener('tour-guide', onEditorMessage)
}

window.onPageLoad = onPageLoad
window.onEditorMessage = onEditorMessage
window.loadTourGuideScript = loadTourGuideScript
window.onTourGuideUpdated = onTourGuideUpdated
window.subscribeToTourGuideStore = subscribeToTourGuideStore

/**
 * ----------------------------
 * Stuff for the selector tool.
 * ----------------------------
 */


const selectorGenerator = new CssSelectorGenerator({ selectors: ['class', 'tag', 'nthchild'] })

let selectorCallback = () => null
let selectorContainer
let selectorStyles
let mouseX = 0
let mouseY = 0

const handlePlacementSelector = (targetSelector) => {
  tourGuide.modifyCoachMarkAttributes({
    targetSelector,
  })
}

const handleProgressSelector = (targetSelector) => {
  tourGuide.modifyCoachMarkAttributes({
    progressOnDomEvent: {
      event: 'click',
      targetSelector,
    },
  })
}

// TODO isSpecfic is very inefficent find a way to improve it.
/**
 * Used to find the most specific DOM elements in an array.
 * @param {Node} element - A DOM node.
 * @param {Node[]} testArray - An array of DOM nodes.
 */

const isSpecific = (element, testArray) => testArray.reduce((testVal, testElement) => {
  if (!testVal) return testVal
  if (testElement === element) return true
  if (element.contains(testElement)) return false

  return true
}, true)

const getElementsByPoint = (xPos, yPos) => [...document.body.querySelectorAll('*')]
  .filter(element => element.id !== 'tour_guide_authoring_selector_container' && element.id !== 'tour_guide_authoring_selector')
  .filter((element) => {
    const bounds = element.getBoundingClientRect()

    return (
      xPos < bounds.right &&
      xPos > bounds.left &&
      yPos < bounds.bottom &&
      yPos > bounds.top
    )
  })
  .filter((element, id, testArray) => isSpecific(element, testArray))

/**
 * The event handler used to handle the "mousemove" event.
 * @param {MouseEvent} evt - The mouse move event.
 */
const selectorMouseMoveHandler = (evt) => {
  if (evt.type === 'mousemove') {
    mouseX = evt.clientX
    mouseY = evt.clientY
  }

  const query = getElementsByPoint(mouseX, mouseY)
  const target = query[Math.floor((mouseX + mouseY) * 0.3) % query.length]
  const targetBounds = target.getBoundingClientRect()
  const selector = selectorGenerator.getSelector(target)

  renderSelector(
    targetBounds.x,
    targetBounds.y,
    targetBounds.width,
    targetBounds.height,
    selector,
  )
}

const startSelector = (cb = selectorCallback) => {
  selectorContainer = document.createElement('div')
  selectorStyles = document.createElement('style')

  selectorContainer.id = 'tour_guide_authoring_selector_container'
  selectorStyles.id = 'tour_guide_authoring_styles'
  selectorStyles.innerHTML = `#tour_guide_authoring_selector_container {
  display: block;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 0px;
  height: 0px;
  background: green;
  z-index: 100000000;
}

#tour_guide_authoring_selector {
  position: fixed;
  background: rgba(90, 169, 250, 0.2);
  border: solid 1px #2680eb;
  border-radius: 4px;
  cursor: crosshair;
}
`
  document.body.insertAdjacentElement('beforeend', selectorContainer)
  document.head.insertAdjacentElement('beforeend', selectorStyles)

  window.addEventListener('mousemove', selectorMouseMoveHandler)
  window.addEventListener('scroll', selectorMouseMoveHandler)

  selectorCallback = cb
  tourGuide.hideTourGuide()
}

const stopSelector = () => {
  selectorContainer.remove()
  selectorStyles.remove()
  window.removeEventListener('mousemove', selectorMouseMoveHandler)
  window.removeEventListener('scroll', selectorMouseMoveHandler)
  ipcRenderer.sendToHost('tour-guide', {
    type: 'EDITOR_SELECTOR_STOPPED',
  })
  tourGuide.showTourGuide()
}

const selectorClickhandler = (selector) => {
  selectorCallback(selector)
  stopSelector()
}

/**
 * The React component for the selector.
 * @param {*} props - React props for selector element.
 */

const SelectorComponent = ({
  x,
  y,
  width,
  height,
  selector,
}) => e(
  'div',
  {
    id: 'tour_guide_authoring_selector',
    onClick: () => selectorClickhandler(selector),
    style: {
      left: x,
      top: y,
      width,
      height,
    },
  },
)

/**
 * Renders the Selector Component
 * @param {number} x - The X position the selector will be rendered at.
 * @param {number} y - The Y position the selector will be rendered at.
 * @param {number} width - The width of the selector.
 * @param {number} height - The height of the selector.
 */
const renderSelector = (x, y, width, height, selector) => {
  render(
    e(
      SelectorComponent,
      {
        x,
        y,
        width,
        height,
        selector,
      },
    ),
    selectorContainer,
  )
}

window.startSelector = startSelector
window.stopSelector = stopSelector
