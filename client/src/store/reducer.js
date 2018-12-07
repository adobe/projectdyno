import {
  ADD_COACHMARK,
  ADD_TOUR,
  HIDE_TOUR_GUIDE,
  MODIFY_COACHMARK_ATTRIBUTES,
  REMOVE_COACHMARK_ATTRIBUTE,
  NEXT_COACHMARK,
  NEXT_TOUR,
  PREV_COACHMARK,
  PREV_TOUR,
  SET_CURRENT_COACHMARK,
  SET_CURRENT_TOUR,
  SET_STATE,
  SHOW_TOUR_GUIDE,
  REMOVE_COACHMARK,
  REMOVE_TOUR,
  MODIFY_TOUR_ATTRIBUTES,
  TOUR_FINISHED,
  COACH_MARK_POSITION_IS_ADJUSTED,
} from './actionTypes'

const handleNavigationAction = (state, currentTourIndex, currentCoachMarkIndex) => {
  const {
    currentTourIndex: oldTourIndex,
    currentCoachMarkIndex: oldCoachMarkIndex,
  } = state
  const newTours = state.tours.map((tour, i) => (
    i === oldTourIndex
      ? {
        ...tour,
        coachMarks: tour.coachMarks.map((coachMark, j) => (
          j === oldCoachMarkIndex
            ? {
              ...coachMark,
              isComplete: true,
            }
            : coachMark
        )),
      }
      : tour
  ))

  return {
    ...state,
    currentCoachMarkIndex,
    currentTourIndex,
    tours: newTours,
  }
}

const root = (state, action) => {
  switch (action.type) {
    case NEXT_COACHMARK: {
      const currentTourIndex = state.tours[state.currentTourIndex]
      const currentCoachMarkIndex = (state.currentCoachMarkIndex + 1) %
        currentTourIndex.coachMarks.length

      return handleNavigationAction(state, state.currentTourIndex, currentCoachMarkIndex)
    }
    case PREV_COACHMARK: {
      const currentTourIndex = state.tours[state.currentTourIndex]
      const coachMarkLength = currentTourIndex.coachMarks.length
      let currentCoachMarkIndex = (state.currentCoachMarkIndex - 1) % coachMarkLength

      currentCoachMarkIndex = currentCoachMarkIndex < 0
        ? currentCoachMarkIndex + coachMarkLength : currentCoachMarkIndex

      return handleNavigationAction(state, state.currentTourIndex, currentCoachMarkIndex)
    }
    case SET_CURRENT_COACHMARK: {
      return handleNavigationAction(state, state.currentTourIndex, action.payload)
    }
    case MODIFY_COACHMARK_ATTRIBUTES: {
      const coachMarkId = action.payload.coachMarkId || state.currentCoachMarkIndex
      const tourId = action.payload.tourId || state.currentTourIndex
      const newCoachMark = {
        ...state.tours[tourId].coachMarks[coachMarkId],
        ...action.payload.attributes,
      }
      const newTour = {
        ...state.tours[tourId],
        coachMarks: state.tours[tourId].coachMarks.map(
          (coachmark, id) => (id === coachMarkId ? newCoachMark : coachmark),
        ),
      }
      const newState = {
        ...state,
        tours: state.tours.map((tour, id) => (id === tourId ? newTour : tour)),
      }

      return newState
    }
    case MODIFY_TOUR_ATTRIBUTES: {
      const tourId = action.payload.tourId || state.currentTourIndex
      const newTour = {
        ...state.tours[tourId],
        ...action.payload.attributes,
      }
      const newTours = state.tours.map((tour, id) => (id === tourId ? newTour : tour))
      const newState = {
        ...state,
        tours: newTours,
      }

      return newState
    }
    case REMOVE_COACHMARK_ATTRIBUTE: {
      const coachMarkId = action.payload.coachMarkId || state.currentCoachMarkIndex
      const tourId = action.payload.tourId || state.currentTourIndex
      const {
        [action.payload.attribute]: removed,
        ...newCoachMark
      } = state.tours[tourId].coachMarks[coachMarkId]
      const newTour = {
        ...state.tours[tourId],
        coachMarks: state.tours[tourId].coachMarks.map(
          (coachmark, id) => (id === coachMarkId ? newCoachMark : coachmark),
        ),
      }
      const newState = {
        ...state,
        tours: state.tours.map((tour, id) => (id === tourId ? newTour : tour)),
      }

      return newState
    }
    case NEXT_TOUR: {
      const currentTourIndex = (state.currentTourIndex + 1) % state.tours.length

      return handleNavigationAction(state, currentTourIndex, 0)
    }
    case PREV_TOUR: {
      const tourLength = state.tours.length
      let currentTourIndex = (state.currentTourIndex - 1) % tourLength

      currentTourIndex = currentTourIndex < 0
        ? currentTourIndex + tourLength
        : currentTourIndex

      return handleNavigationAction(state, currentTourIndex, 0)
    }
    case REMOVE_COACHMARK: {
      const { currentCoachMarkIndex } = state
      const tourId = action.tourId
        ? action.tourId
        : state.currentTourIndex
      const coachMarkId = action.coachMarkId
        ? action.coachMarkId
        : state.currentCoachMarkIndex
      const activeTour = state.tours[tourId]
      const { coachMarks } = activeTour
      const newCoachMarks = coachMarks.filter((coachMark, id) => id !== coachMarkId)
      const newTour = {
        ...activeTour,
        coachMarks: newCoachMarks,
      }
      const newCurrentCoachMarkIndex = currentCoachMarkIndex > (newCoachMarks.length - 1)
        ? newCoachMarks.length - 1 : currentCoachMarkIndex
      const newState = {
        ...state,
        currentCoachMarkIndex: newCurrentCoachMarkIndex,
        tours: state.tours.map((tour, id) => (id === tourId ? newTour : tour)),
      }

      return newState
    }
    case REMOVE_TOUR: {
      const { currentTourIndex } = state
      const tourId = action.payload.tourId || currentTourIndex
      const newTours = state.tours.filter((tour, id) => id !== tourId)
      const maxIndex = newTours.length === 0 ? 0 : newTours.length - 1
      const newCurrentTourIndex = currentTourIndex > maxIndex ? maxIndex : currentTourIndex
      const newState = {
        ...state,
        currentTourIndex: newCurrentTourIndex,
        tours: newTours,
      }
      return newState
    }
    case SET_CURRENT_TOUR: {
      return handleNavigationAction(state, action.payload, 0)
    }
    case SHOW_TOUR_GUIDE: {
      return {
        ...state,
        infoBoxIsVisible: true,
      }
    }
    case HIDE_TOUR_GUIDE: {
      return {
        ...state,
        infoBoxIsVisible: false,
      }
    }
    case TOUR_FINISHED: {
      return {
        ...state,
        infoBoxIsVisible: false,
      }
    }
    case ADD_COACHMARK: {
      const tourId = action.payload.tourId || state.currentTourIndex
      const tours = state.tours[tourId]
      const { coachMarks } = tours
      const newCoachMark = {
        id: null,
        title: null,
        description: null,
        anchorPosition: 'bottom',
        align: 'center',
      }
      const newTour = {
        ...state.tours[tourId],
        coachMarks: [...coachMarks, { ...newCoachMark, ...action.payload.attributes }],
      }
      const newState = {
        ...state,
        tours: state.tours.map((tour, id) => (id === tourId ? newTour : tour)),
      }

      return newState
    }
    case ADD_TOUR: {
      const newTours = [
        ...state.tours,
        action.payload.attributes,
      ]
      const newState = {
        ...state,
        tours: newTours,
      }

      return newState
    }
    case SET_STATE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case COACH_MARK_POSITION_IS_ADJUSTED: {
      return {
        ...state,
        coachMarkPostionIsAdjusted: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export const getCurrentTour = state => state.tours[state.currentTourIndex]
export const getCurrentCoachMarks = (state) => {
  const currentTour = getCurrentTour(state)

  return currentTour ? currentTour.coachMarks : []
}
export const getCurrentCoachMark = state => getCurrentCoachMarks(state)[state.currentCoachMarkIndex]
export const getCurrentTheme = state => getCurrentTour(state).theme

export default root
