import smoothscroll from 'smoothscroll-polyfill'
import defaultOptions from './init/defaultOptions'

class TourGuide {
  constructor(initialState = {}, options = defaultOptions) {
    // poly fills for smooth scroll functionality
    smoothscroll.polyfill()

    const appOptions = {
      ...defaultOptions,
      ...options,
    }
    const {
      getRenderer,
      getStore,
    } = appOptions

    this.store = getStore(initialState)
    this.renderer = getRenderer(this.store)

    // alias action dispatchers on the root tourguide object
    Object.keys(this.store.actions).forEach(
      (key) => {
        this[key] = this.store.actions[key]
      },
    )

    // add aliases for callback functions
    this.addCallback = this.store.addCallback
    this.removeCallback = this.store.removeCallback
    this.removeAllCallbacks = this.store.removeAllCallbacks
  }
}

if (window) {
  window.TourGuide = TourGuide
}

export default TourGuide
