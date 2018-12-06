/* eslint no-use-before-define: 0 */

import CssSelectorGenerator from 'css-selector-generator'
import { render } from 'react-dom'
import { createElement as e } from 'react'

const SELECTOR_HIGHLIGHT = '___tour-guide-authoring-client-selector-highlight'

const SelectorOverlay = ({
  left,
  top,
  width,
  height,
  selectHandler,
}) => {
  const selectorStyle = {
    position: 'absolute',
    background: 'rgba(90, 169, 250, 0.2)',
    border: 'solid 1px #2680eb',
    borderRadius: '4px',
    cursor: 'crosshair',
    left,
    top,
    width,
    height,
  }

  return e(
    'div',
    {
      style: selectorStyle,
      onClick: selectHandler,
      onKeyPress: selectHandler,
      role: 'button',
      tabIndex: -1,
    },
  )
}

const overlayStyle = `
position: fixed;
top: 0px;
left: 0px;
width: 0px;
height: 0px;
z-index: 1000000;
`

const getParentCount = (element, count = 0) => {
  if (element.parentElement) {
    return getParentCount(element.parentElement, count + 1)
  }

  return count
}

const getElementsAtPoint = (xPos, yPos) => [...document.body.querySelectorAll('*')]
  .filter((element) => {
    const bounds = element.getBoundingClientRect()

    return (
      xPos < bounds.right &&
      xPos > bounds.left &&
      yPos < bounds.bottom &&
      yPos > bounds.top
    )
  })

const getMostSpecificElement = (elements) => {
  const parentCounts = elements
    .map(element => ({ element, parentCount: getParentCount(element) }))
  const maxParentCount = parentCounts.reduce(
    (max, current) => (current.parentCount > max ? current.parentCount : max),
    0,
  )
  const mostSpecificElements = parentCounts
    .filter(element => element.parentCount === maxParentCount)

  return mostSpecificElements[0].element
}

class Selector {
  constructor() {
    this.selectionCallback = null
    this.overlayElement = null
    this.targetElment = null
    this.targetBounds = null
    this.mouseX = null
    this.mouseY = null
    this.scrollX = null
    this.scrollY = null
    this.hasStarted = false
    this.selectorGenerator = new CssSelectorGenerator({ selectors: ['class', 'tag', 'nthchild'] })

    this.renderOverlay = this.renderOverlay.bind(this)
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
    this.mouseScrollHandler = this.mouseScrollHandler.bind(this)
    this.selectHandler = this.selectHandler.bind(this)
    this.end = this.end.bind(this)
    this.start = this.start.bind(this)
  }

  selectHandler() {
    const selector = this.selectorGenerator.getSelector(this.targetElement)

    this.selectionCallback(selector)
    this.end()
  }

  renderOverlay() {
    const currentOverlay = document.querySelector(`.${SELECTOR_HIGHLIGHT}`)

    const hoverElements = getElementsAtPoint(
      this.mouseX - window.scrollX,
      this.mouseY - window.scrollY,
    ).filter(element => element !== currentOverlay)
    this.targetElement = getMostSpecificElement(hoverElements)
    this.targetBounds = this.targetElement.getBoundingClientRect().toJSON()

    const props = {
      ...this.targetBounds,
      selectHandler: this.selectHandler,
    }

    render(
      e(
        SelectorOverlay,
        {
          ...props,
        },
      ),
      this.overlayElement,
    )
  }

  mouseScrollHandler() {
    const scrollDeltaX = this.scrollX - window.scrollX
    const scrollDeltaY = this.scrollY - window.scrollY

    this.scrollX = window.scrollX
    this.scrollY = window.scrollY

    this.mouseX = this.mouseX - scrollDeltaX
    this.mouseY = this.mouseY - scrollDeltaY
    this.renderOverlay()
  }

  mouseMoveHandler(evt) {
    this.mouseX = evt.pageX
    this.mouseY = evt.pageY
    this.renderOverlay()
  }

  end() {
    window.removeEventListener('mousemove', this.mouseMoveHandler)
    window.removeEventListener('scroll', this.mouseScrollHandler)
    this.overlayElement.parentNode.removeChild(this.overlayElement)
    this.selectionCallback = null
    this.overlayElement = null
    this.targetElment = null
    this.targetBounds = null
    this.mouseX = null
    this.mouseY = null
    this.scrollX = null
    this.scrollY = null
    this.hasStarted = false
  }

  start(callback) {
    if (this.hasStarted) {
      this.end()
    }

    this.selectionCallback = callback

    window.addEventListener('mousemove', this.mouseMoveHandler)
    window.addEventListener('scroll', this.mouseScrollHandler)

    this.overlayElement = document.createElement('div')
    this.overlayElement.style = overlayStyle
    document.body.insertAdjacentElement('beforeend', this.overlayElement)
    this.hasStarted = true
  }
}

export default Selector
