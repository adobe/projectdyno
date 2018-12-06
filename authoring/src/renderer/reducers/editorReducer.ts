import { Reducer } from 'redux'
import { ActionTypeKeys, EditorActions } from '../actions/editorActions'

export enum AnchorPositionTypes {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}
export enum AlignTypes {
  start = 'start',
  center = 'center',
  end = 'end',
}
export enum SelectorModeKeys {
  PLACEMENT = 'PLACEMENT',
  PROGRESS = 'PROGRESS',
  NONE = 'NONE',
}
export enum EditorModeKeys { 'tours', 'coachmarks' }
export enum NavButtonTypes {
  back = 'back',
  close = 'close',
  next = 'next',
}
export enum AttributeModeKeys { 'placement', 'content', 'progress' }

export interface ICoachMarkMedia {
  height: number,
  src: string,
  width: number,
}

export interface ICoachMark {
  align: AlignTypes,
  anchorPosition: AnchorPositionTypes,
  description: string,
  navButtons: NavButtonTypes[],
  targetSelector: string,
  title: string,
  media?: ICoachMarkMedia,
  dimBackground?: boolean,
  progressOnDomEvent?: {
    event: string,
    targetSelector: string,
  }
}

export interface ITour {
  coachMarks: ICoachMark[],
  title: string,
}

export interface ITourGuideState {
  currentCoachMarkIndex: number,
  currentTourIndex: number,
  infoBoxIsVisible: boolean,
  coachMarkPostionIsAdjusted: boolean,
  tours: ITour[],
}

export interface IEditorState {
  /** Used to determine what to display in the side panel.  Either tours, or coachmarks. */
  editMode: EditorModeKeys,
  /**  Used to determine what to attributes to dispaly when editing coach marks. */
  attributeMode: AttributeModeKeys,
  /** The state of the selector tool. */
  selectorMode: SelectorModeKeys,
  /** The tour guide state. */
  tourGuideState?: ITourGuideState,
}

const initialState: IEditorState = {
  attributeMode: AttributeModeKeys.placement,
  selectorMode: SelectorModeKeys.NONE,
  editMode: EditorModeKeys.tours,
}

const editorReducer: Reducer<IEditorState, EditorActions> = (
  state: IEditorState = initialState,
  action: EditorActions,
) => {
  switch (action.type) {
    case ActionTypeKeys.EDITOR_SET_MODE: {
      return {
        ...state,
        editMode: action.payload.editMode,
      }
    }
    case ActionTypeKeys.EDITOR_SET_ATTRIBUTE_MODE: {
      return {
        ...state,
        attributeMode: action.payload.attributeMode,
      }
    }
    case ActionTypeKeys.EDITOR_TOUR_GUIDE_UPDATED: {
      return {
        ...state,
        tourGuideState: action.payload.state,
      }
    }
    case ActionTypeKeys.EDITOR_CLEAR_TOUR_GUIDE_STATE: {
      const {
        tourGuideState,
        ...rest
      } = state

      return rest
    }
    case ActionTypeKeys.EDITOR_START_SELECTOR: {
      return {
        ...state,
        selectorMode: action.payload,
      }
    }
    case ActionTypeKeys.EDITOR_SELECTOR_STOPPED: {
      return {
        ...state,
        selectorMode: SelectorModeKeys.NONE,
      }
    }
    default: {
      return state
    }
  }
}

export default editorReducer
