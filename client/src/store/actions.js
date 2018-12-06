/**
 * @module actions
 */

/**
 * @typedef {Object} CoachMarkMedia
 * @property {string} src - The url to the coach mark's media file.
 * @property {number} width - The width of the media in pixels.
 * @property {number} height - The height of the media in pixels.
 */

/**
  * A plain javaScript object that specificies the properties of a coach mark.
  * @typedef {Object} CoachMarkProperties
  * @property {string|undefined} targetSelector - A css selector for the page element
  * that the coach mark will target.
  * @property {string|undefined} title - The coach mark's title.
  * @property {string|undefined} description - The coach mark's description.
  * @property {string|undefined} anchorPosition - The coach mark's anchor position.
  * @property {string|undefined} align - The alignment of the coach mark.
  * @property {CoachMarkMedia|undefined} media - The coachmark's media.
  */

/**
 * A flux standard action
 * @typedef {Object} Action
 * @property {string} type - The action's type.
 * @property {*} payload - The action's payload.
 */

import {
  ADD_COACHMARK,
  ADD_TOUR,
  HIDE_TOUR_GUIDE,
  MODIFY_COACHMARK_ATTRIBUTES,
  MODIFY_TOUR_ATTRIBUTES,
  NEXT_COACHMARK,
  NEXT_TOUR,
  PREV_COACHMARK,
  PREV_TOUR,
  REMOVE_COACHMARK_ATTRIBUTE,
  REMOVE_COACHMARK,
  REMOVE_TOUR,
  SET_CURRENT_COACHMARK,
  SET_CURRENT_TOUR,
  SET_STATE,
  SHOW_TOUR_GUIDE,
  TOUR_FINISHED,
  TARGET_SELECTOR_IS_VALID,
  PROGRESS_SELECTOR_IS_VALID,
  COACH_MARK_POSITION_IS_ADJUSTED,
} from './actionTypes'

/**
 * This action adds a new coach mark to the tour.
 * The new coach mark will be appeneded to the end of the tour.
 * @param {CoachMarkProperties} properties - An object that defines the coach mark properties.
 * @param {number=} tourId - An integer, the index of the tour that the coach mark will be added to.
 * @returns {Action} - The addCoachMark action that was just crated.
 */
export const addCoachMark = (attributes, tourId = null) => ({
  type: ADD_COACHMARK,
  payload: {
    attributes,
    tourId,
  },
})

/**
 * This actions adds a to tour.
 * @param {*} attributes - The new tour's attributes.
 * @returns {Action}
 */
export const addTour = attributes => ({
  type: ADD_TOUR,
  payload: {
    attributes,
  },
})

/**
 * This triggers the next coach mark.
 * If the current coach mark is the last coach mark in the tour,
 * the tour will proceed at the first coach mark.
 * @returns {Action}
 */
export const nextCoachMark = () => ({
  type: NEXT_COACHMARK,
})

/**
 * This action triggers the previous coach mark.
 * If the current coach mark is the first coach mark in the tour,
 * the tour will proceed at the last coach mark.
 * @returns {Action}
 */
export const prevCoachMark = () => ({
  type: PREV_COACHMARK,
})

/**
 * This action triggers the specified coach mark.
 * The provided coach mark id must be valid or an error will be thrown.
 * @param {number} id An integer specifying the index of the coach mark
 * that will be made current.
 * @returns {Action}
 */
export const setCurrentCoachMark = id => ({
  payload: id,
  type: SET_CURRENT_COACHMARK,
})

/**
 * This action triggers the next available tour.
 * The next tour will start at the first coach mark.
 * @returns {Action}
 */
export const nextTour = () => ({
  type: NEXT_TOUR,
})

/**
 * This action triggers the previous tour.
 * The tour will start at the first coach mark.
 * @returns {Action}
 */
export const prevTour = () => ({
  type: PREV_TOUR,
})

/**
 * This action activates the specified tour.
 * The tour will start at the first coach mark.
 * The provided tour id must be valid or an error will be thrown.
 * @param {number} id - An integer specifying the index of the tour that will be made active.
 * @returns {Action}
 */
export const setCurrentTour = id => ({
  payload: id,
  type: SET_CURRENT_TOUR,
})

/**
 * This action removes the specified coach mark from the specified tour.
 * @param {number} coachMarkId - An integer specifying the index of the coach mark to be removed.
 * If not provided, the current coach mark will be used.
 * @param {number} tourId - An integer specifying the index of the tour containing the coach
 * mark to be removed.  If not provided, the current tour will be used.
 * @returns {Action}
 */
export const removeCoachMark = (coachMarkId = null, tourId = null) => ({
  payload: {
    coachMarkId,
    tourId,
  },
  type: REMOVE_COACHMARK,
})

/**
 * This action removes the specified tour.
 * @param {integer} tourId - The index of the tour to be removed.
 * If not provided, the current tour will be removed.
 * @returns {Action}
 */
export const removeTour = (tourId = null) => ({
  payload: {
    tourId,
  },
  type: REMOVE_TOUR,
})

/**
 * This action hides the tour guide UI.
 * If the UI is already hidden, nothing will happen.
 * @returns {Action}
 */
export const hideTourGuide = () => ({
  type: HIDE_TOUR_GUIDE,
})

/**
 * This action shows the tour guide UI.
 * If the UI is already visible, nothing will happen.
 * @returns {Action}
 */
export const showTourGuide = () => ({
  type: SHOW_TOUR_GUIDE,
})

/**
 * This action removes an attribute from a coach mark.  If a required attribute is removed,
 * and error will be thrown.
 * @param {CoachMarkProperties} attributes - The attribute to be removed.
 * @param {number} coachmarkId - An integer specifying the index of the coachmark to be altered.
 * If not provided, the current coach mark will be used.
 * @param {number} tourId - An integer specifying the index of the tour containing the coach mark
 * that will be altered. If not provided, the current tour will be used.
 * @returns {Action}
 */
export const removeCoachMarkAttribute = (attribute, coachMarkId = null, tourId = null) => ({
  payload: {
    attribute,
    coachMarkId,
    tourId,
  },
  type: REMOVE_COACHMARK_ATTRIBUTE,
})

/**
 * This action modifies the attributes of an exisiting coach mark.
 * @param {CoachMarkProperties} attributes - An object containing the attributes to be altered.
 * @param {number} coachmarkId - An integer specifying the index of the coachmark to be altered.
 * If not provided, the current coach mark will be used.
 * @param {number} tourId - An integer specifying the index of the tour containing the coach mark
 * that will be altered. If not provided, the current tour will be used.
 * @returns {Action}
 */
export const modifyCoachMarkAttributes = (attributes, coachMarkId = null, tourId = null) => ({
  payload: {
    attributes,
    coachMarkId,
    tourId,
  },
  type: MODIFY_COACHMARK_ATTRIBUTES,
})

/**
 * This action modifies the attributes of an existing tour.
 * @param {*} attributes - An object containing the attributes to be altered.
 * @param {integer} tourId - An integer specifying the index of the tour to be altered.
 * @returns {Action}
 */
export const modifyTourAttributes = (attributes, tourId = null) => ({
  payload: {
    attributes,
    tourId,
  },
  type: MODIFY_TOUR_ATTRIBUTES,
})

/**
 * This action is used to quickly replace large sections of app state.
 * For example it can be used to replace the old batch of tours with a new one.
 * The submitted state is a plain javascript with the same shape/schema at the app state.
 * The submitted state is shallowly merged with the old state.
 * @param {*} state - The apps state
 * @returns {Action}
 */
export const setState = state => ({
  payload: state,
  type: SET_STATE,
})

/**
 * Behaves the same as the hideTourGuide action.
 * It is dispatched when the user clicks the 'Finish' button.
 * This action is used instead of hideTourGuide so that a callback can
 * be used for when a user completes a tour.
 * @returns {Action}
 */
export const tourFinished = () => ({
  type: TOUR_FINISHED,
})

export const progressSelectorIsValid = isValid => ({
  type: PROGRESS_SELECTOR_IS_VALID,
  payload: isValid,
})

export const targetSelectorIsValid = isValid => ({
  type: TARGET_SELECTOR_IS_VALID,
  payload: isValid,
})

export const coachMarkPostionIsAdjusted = isAdjusted => ({
  type: COACH_MARK_POSITION_IS_ADJUSTED,
  payload: isAdjusted,
})
