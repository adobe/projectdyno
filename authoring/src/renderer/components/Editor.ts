import { createElement as e, Component } from 'react'
import {
  AttributeModeKeys,
  EditorModeKeys,
  IEditorState,
  ITour,
  ITourGuideState,
  ICoachMark,
  SelectorModeKeys,
} from '../reducers/editorReducer'
import Transitioner, { AnimationDirection } from './editor/Transitioner'
import CoachMarksEditor from './editor/CoachMarksEditor'
import ToursEditor from './editor/ToursEditor'
import Unintialized, { IUninitializedProps } from './editor/Uninitialized'
import Loading from './editor/Loading'

import '../styles/editor.scss'

export interface IEditorActions {
  editorAddCoachMark: () => void,
  editorAddTour: (title: string) => void,
  editorExportTours: (state: ITourGuideState) => void,
  editorImportTours: () => void,
  editorInitializeTourguide: () => void,
  editorRemoveCoachMark: (id: number) => void,
  editorRemoveTour: (id: number) => void,
  editorSetAttributeMode: (attributeMode: AttributeModeKeys) => void,
  editorSetMode: (editMode: EditorModeKeys) => void,
  editorSetActiveCoachMarkIndex: (index: number) => void,
  editorSetActiveTourIndex: (index: number) => void,
  editorStartSelector: (type: SelectorModeKeys) => void,
  editorStopSelector: () => void,
  editorModifyCoachMarkAttributes: (
    attributes: Partial<ICoachMark>,
    coachMarkId?: number | null,
    tourId?: number | null,
  ) => void,
  editorModifyTourAttributes: (
    attributes: Partial<ITour>,
    tourId?: number | null,
  ) => void,
}

export interface IEditorProps extends IEditorState {
  currentTour: ITour | null,
  isLoading: boolean,
  dispatch: IEditorActions,
  selectorMode: SelectorModeKeys,
}

export interface IValidatedEditorProps extends IEditorProps {
  tourGuideState: ITourGuideState,
  currentTour: ITour,
}

enum EditorStateKeys {
  LOADING,
  UNINITIALIZED,
  COACHMARKS,
  TOURS,
}

export interface IEditorComponentState {
  state: EditorStateKeys,
  lastState: EditorStateKeys,
}

/**
 * The editor component.
 */
class Editor extends Component<IEditorProps, IEditorComponentState> {
  state: IEditorComponentState = {
    state: EditorStateKeys.LOADING,
    lastState: EditorStateKeys.LOADING,
  }

  static getDerivedStateFromProps(props: IEditorProps, state: IEditorComponentState) {
    const {
      editMode,
      isLoading,
      tourGuideState,
    } = props

    const editorState = (() => {
      if (isLoading) {
        return EditorStateKeys.LOADING
      }

      if (!isLoading && !tourGuideState) {
        return EditorStateKeys.UNINITIALIZED
      }

      if (editMode === EditorModeKeys.coachmarks) {
        return EditorStateKeys.COACHMARKS
      }

      return EditorStateKeys.TOURS
    })()

    return {
      state: editorState,
      lastState: state.state,
    }
  }

  render() {
    const {
      dispatch,
    } = this.props

    const {
      state: editorState,
      lastState,
    } = this.state

    const direction = editorState === EditorStateKeys.COACHMARKS ? AnimationDirection.RIGHT_TO_LEFT : AnimationDirection.LEFT_TO_RIGHT

    return e(
      'div',
      { className: 'editor' },
      e(
        Transitioner,
        {
          isVisible: editorState === EditorStateKeys.LOADING,
          direction
        },
        e(Loading),
      ),
      e(
        Transitioner,
        {
          isVisible: editorState === EditorStateKeys.UNINITIALIZED,
          direction
        },
        e<IUninitializedProps>(Unintialized, { dispatch })
      ),
      e(
        Transitioner,
        {
          isVisible: editorState === EditorStateKeys.TOURS,
          direction
        },
        e(ToursEditor, this.props as IValidatedEditorProps),
      ),
      e(
        Transitioner,
        {
          isVisible: editorState === EditorStateKeys.COACHMARKS,
          direction
        },
        e(CoachMarksEditor, this.props as IValidatedEditorProps),
      )
    )
  }
}

export default Editor
