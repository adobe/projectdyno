/* eslint no-underscore-dangle: 0 */

import { applyMiddleware, compose, createStore as initializeStore } from 'redux'
import queryString from 'query-string'
import * as actionCreators from '../store/actions'
import reducer from '../store/reducer'
import { WHITE } from '../renderer/themeTypes'

const defaultState = {
  currentCoachMarkIndex: 0,
  currentTourIndex: 0,
  infoBoxIsVisible: false,
  tours: [
    {
      title: null,
      theme: WHITE,
      coachMarks: [],
    },
  ],
  coachMarkPostionIsAdjusted: false,
}

let store = null

const stateFromQueryString = () => {
  const { showTour, showCoachMark } = queryString.parse(window.location.search)
  const queryState = {}

  if (showTour) {
    const value = parseInt(showTour, 10)

    if (!isNaN(value)) {
      queryState.currentTourIndex = value
      queryState.infoBoxIsVisible = true
    }
  }

  if (showCoachMark) {
    const value = parseInt(showCoachMark, 10)

    if (!isNaN(value)) {
      queryState.currentCoachMarkIndex = value
      queryState.infoBoxIsVisible = true
    }
  }

  return queryState
}

// wraps action creators in a dispatch call
const wrapDispatch = (actions, dispatch) => Object
  .keys(actions)
  .map(key => ({ [key]: (...params) => dispatch(actions[key].apply(null, params)) }))
  .reduce((prev, current) => ({ ...prev, ...current }), {})

/**
 * This function determines what the app's initial state will be.
 * The apps's initial state can come from state passed from the init() function and URL parameters.
 * It then returns an instance of the redux store with an 'actions' parameter.
 * The 'actions' parameter contains all the action creators wrapped in a dispatch statement.
 * This makes passing action dispatcher to the view components easier.
 * @param {*} stateFromConfig - The initial application state.
 * @returns {*} - An instance of a redux store with an 'actions' parameter
 */
const getStore = (stateFromConfig = defaultState, callbackConfig = {}) => {
  if (!store) {
    // TODO validate callbackConfig
    const callbacks = callbackConfig
    const initialState = {
      ...defaultState,
      ...stateFromConfig,
      ...stateFromQueryString(),
    }
    const callbackMiddleware = () => next => (action) => {
      if (callbacks[action.type]) {
        callbacks[action.type].forEach(
          (cb) => {
            cb(action)
          },
        )
      }
      next(action)
    }
    const composeMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    store = initializeStore(
      reducer,
      initialState,
      composeMiddleware(applyMiddleware(callbackMiddleware)),
    )

    const { dispatch } = store

    store.actions = wrapDispatch(actionCreators, dispatch)

    /**
     * Add a callback that will respond to a redux action.
     * @param {string} - The action type that the callback will respond to.
     * @param {function} - The callback that will be executed.
     */
    store.addCallback = (action, cb) => {
      if (!callbacks[action]) {
        callbacks[action] = []
      }

      callbacks[action].push(cb)
    }

    /**
     * Removes a callback from a redux event.
     * @param {string} action - The action type that will have a callback removed.
     * @param {functioin} cb - The callback function that will be removed.
     */
    store.removeCallback = (action, cb) => {
      if (callbacks[action]) {
        callbacks[action] = callbacks[action].filter(callback => callback !== cb)
      }
    }

    /**
     * Removes all callbacks from an action.
     * @param {string} action - The action type that will have all callbacks removed.
     */
    store.removeAllCallbacks = (action) => {
      if (callbacks[action]) {
        delete callbacks[action]
      }
    }
  }

  return store
}

export default getStore
