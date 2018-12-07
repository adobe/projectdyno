import m from 'mithril'
import isOffscreen from './helpers/isOffscreen'
import TourGuide from './components/TourGuide'
import TourGuideStaticStyles from './TourGuideStaticStyles'
import TourGuideStyles from './TourGuideStyles'
import { getCurrentCoachMark, getCurrentCoachMarks, getCurrentTheme } from '../store/reducer'
import getElement from './helpers/getElement'

class Renderer {
  constructor({
    subscribe, getState, dispatch, actions,
  }) {
    // Bind methods to class scope.
    this.render = this.render.bind(this)

    // Assign store methods to class.
    this.getState = getState
    this.dispatch = dispatch
    this.actions = actions
    this.state = getState()
    this.hasMounted = false
    this.targetElement = null
    this.isScrolling = false
    this.willRender = null

    this.createTourGuideElements()
    this.createDomEventListeners()

    subscribe(this.render)
    this.render()
  }

  createTourGuideElements() {
    // Create tour guide elements and mount mithril components
    this.tourGuideElement = document.createElement('div')
    this.tourGuideStyles = document.createElement('style')
    this.tourGuideStaticStyles = document.createElement('style')

    this.tourGuideElement.className = '___tourguide'
    this.tourGuideStyles.id = '___tourguide-dynamic-styles'
    this.tourGuideStaticStyles.id = '___tourguide-static-styles'
    document.body.insertAdjacentElement(
      'beforeend',
      this.tourGuideElement,
    )
    document.head.insertAdjacentElement(
      'beforeend',
      this.tourGuideStaticStyles,
    )
    document.head.insertAdjacentElement(
      'beforeend',
      this.tourGuideStyles,
    )

    m.render(this.tourGuideStaticStyles, m(TourGuideStaticStyles))
  }

  createDomEventListeners() {
    window.addEventListener('scroll', () => this.render(false), true)
    window.addEventListener('resize', () => this.render(), true)

    // Mutation observers monitor the DOM for changes.
    // If there are changes a render is triggered.
    const mutationConfig = {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['style', 'class', 'id'],
    }
    const mutationTarget = document
    const mutationCallback = () => {
      if (this.willRender) {
        clearTimeout(this.willRender)
      }

      this.willRender = setTimeout(
        () => {
          this.render()
          this.willRender = null
        },
        10,
      )
      // this.render()
    }
    const mutationObserver = new MutationObserver(mutationCallback)

    mutationObserver.observe(mutationTarget, mutationConfig)
  }

  /**
   * The render function triggers a render of the Tour Guide DOM elemets.
   * This is a three step process.
   * First the applicaton state is retrived from the store.
   * Second a reference to the target DOM element is retrieved.
   * Then target's bounds are established.
   * Third an attributes object is created.
   * This is used to pass the state and target variables to the view components.
   * Fourth the new attributes are passed to the view components.
   * The mithril render function is called.
   * @param {boolean} willAnimate - Determines if coach mark transitions will be animated or not.
   */
  render(willAnimate = true) {
    // remove old event handlers before the new state get propigated to the new views
    const { nextCoachMark } = this.actions

    if (!nextCoachMark) {
      m.render(this.tourGuideElement, null)
      return
    }

    if (this.tourGuideElement) {
      this.tourGuideElement.removeEventListener('transitionend', this.render)
    }

    const oldCoachMark = getCurrentCoachMark(this.state)

    if (oldCoachMark) {
      const { progressOnDomEvent: oldProgressOnDomEvent } = oldCoachMark

      if (oldProgressOnDomEvent) {
        const eventTarget = getElement(oldProgressOnDomEvent.targetSelector)

        if (eventTarget) {
          eventTarget.removeEventListener(
            oldProgressOnDomEvent.event,
            nextCoachMark,
          )
        }
      }
    }

    // Retrieves and normailizes the state.
    const newState = this.getState()

    const isNewCoachMark = !this.hasMounted ||
      newState.currentCoachMarkIndex !== this.state.currentCoachMarkIndex

    this.state = newState

    const {
      currentTourIndex,
      currentCoachMarkIndex,
      moreIsVisible,
      infoBoxIsVisible,
      coachMarkPostionIsAdjusted,
    } = this.state

    const coachMarks = getCurrentCoachMarks(this.state)

    if (!coachMarks || coachMarks.length === 0) {
      m.render(this.tourGuideElement, null)
      return
    }

    const coachMark = getCurrentCoachMark(this.state)
    const theme = getCurrentTheme(this.state)

    if (!coachMark) {
      m.render(this.tourGuideElement, null)
      return
    }

    if (!coachMark.targetPosition) {
      this.targetElement = getElement(coachMark.targetSelector)

      // if coachMark or this.targetElement is undefined abort the render process
      if (!this.targetElement) {
        m.render(this.tourGuideElement, null)
        return
      }
    }

    const { progressOnDomEvent } = coachMark

    if (progressOnDomEvent) {
      const eventTarget = getElement(progressOnDomEvent.targetSelector)

      if (eventTarget) {
        eventTarget.addEventListener(
          progressOnDomEvent.event,
          nextCoachMark,
        )
      }
    }

    const targetBounds = this.targetElement.getBoundingClientRect()
    const attrs = {
      actions: this.actions,
      coachMark,
      coachMarkCount: coachMarks.length,
      coachMarkPostionIsAdjusted,
      coachMarks,
      currentCoachMarkIndex,
      infoBoxIsVisible,
      moreIsVisible,
      targetElement: this.targetElement,
      targetBounds,
      willAnimate,
      theme,
    }
    const isTargetOffscreen = isOffscreen(targetBounds)

    // scroll target element into view if needed
    if (isTargetOffscreen && infoBoxIsVisible && !this.isScrolling) {
      // const scrollTarget = targetBounds.top - window.scrollY

      this.targetElement.scrollIntoView({ behavior: 'smooth' })
      this.isScrolling = true
    }

    if (this.isScrolling && !isTargetOffscreen) {
      this.isScrolling = false
    }

    // dispatch a custom dom event if the current coach mark has changed
    // this is useful for monitoring coach mark changes
    // it was implemented to make it easy to impliment analyitics
    if (infoBoxIsVisible && this.targetElement && isNewCoachMark) {
      this.tourGuideElement.dispatchEvent(
        new CustomEvent(
          'CoachMarkDisplayed',
          {
            detail: {
              coachMarkIndex: attrs.currentCoachMarkIndex,
              tourIndex: currentTourIndex,
            },
          },
        ),
      )
      this.hasMounted = true
    }

    // add event listenders to the current targetElement
    this.targetElement.addEventListener('transitionend', this.render)

    // perform the render/rerender
    m.render(this.tourGuideElement, m(TourGuide, attrs))
    m.render(this.tourGuideStyles, m(TourGuideStyles, attrs))
  }
}

export default Renderer
