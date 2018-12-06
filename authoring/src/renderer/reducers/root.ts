import { AnyAction, combineReducers, Reducer } from 'redux'
import browserReducer, { IBroswerState } from './browserReducer'
import editorReducer, { ICoachMark, IEditorState, ITour } from './editorReducer'

export interface IRoot {
  browser: IBroswerState,
  editor: IEditorState,
}

const root: Reducer<IRoot, AnyAction> = combineReducers<IRoot>({
  browser: browserReducer,
  editor: editorReducer,
})

export const getCurrentTour = (state: IRoot): ITour | null => {
  if (state.editor.tourGuideState) {
    const currentTourIndex: number = state.editor.tourGuideState.currentTourIndex

    return state.editor.tourGuideState.tours[currentTourIndex]
  }

  return null
}

export const getCurrentCoachMark = (state: IRoot): ICoachMark | null => {
  const currentTour: ITour | null = getCurrentTour(state)

  if (currentTour && state.editor.tourGuideState) {
    const currentCoachMarkIndex: number = state.editor.tourGuideState.currentCoachMarkIndex

    return currentTour.coachMarks[currentCoachMarkIndex]
  }

  return null
}

export default root
