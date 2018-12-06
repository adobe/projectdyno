import {
  AttributeModeKeys,
  EditorModeKeys,
  ICoachMark,
  ITourGuideState,
  SelectorModeKeys,
  ITour,
} from '../reducers/editorReducer'

export enum ActionTypeKeys {
  EDITOR_ADD_COACH_MARK = 'EDITOR_ADD_COACH_MARK',
  EDITOR_ADD_TOUR = 'EDITOR_ADD_TOUR',
  EDITOR_CLEAR_TOUR_GUIDE_STATE = 'EDITOR_CLEAR_TOUR_GUIDE_STATE',
  EDITOR_EXPORT_TOURS = 'EDITOR_EXPORT_TOURS',
  EDITOR_IMPORT_TOURS = 'EDITOR_IMPORT_TOURS',
  EDITOR_INITIALIZE_TOUR_GUIDE = 'EDITOR_INITIALIZE_TOUR_GUIDE',
  EDITOR_MODIFY_COACH_MARK_ATTRIBUTES = 'EDITOR_MODIFY_COACH_MARK_ATTRIBUTES',
  EDITOR_MODIFY_TOUR_ATTRIBUTES = 'EDITOR_MODIFY_TOUR_ATTRIBUTES',
  EDITOR_REMOVE_COACH_MARK = 'EDITOR_REMOVE_COACH_MARK',
  EDITOR_REMOVE_TOUR = 'EDITOR_REMOVE_TOUR',
  EDITOR_SELECTOR_STOPPED = 'EDITOR_SELECTOR_STOPPED',
  EDITOR_SET_ACTIVE_COACH_MARK = 'EDITOR_SET_ACTIVE_COACH_MARK',
  EDITOR_SET_ACTIVE_TOUR = 'EDITOR_SET_ACTIVE_TOUR',
  EDITOR_SET_ATTRIBUTE_MODE = 'EDITOR_SET_ATTRIBUTE_MODE',
  EDITOR_SET_MODE = 'EDITOR_SET_MODE',
  EDITOR_START_SELECTOR = 'EDITOR_START_SELECTOR',
  EDITOR_STOP_SELECTOR = 'EDITOR_STOP_SELECTOR',
  EDITOR_TOUR_GUIDE_UPDATED = 'EDITOR_TOUR_GUIDE_UPDATED',
  EDITOR_TOURS_IMPORTED = 'EDITOR_TOURS_IMPORTED',
}

export interface IEditorAddCoachMark {
  type: ActionTypeKeys.EDITOR_ADD_COACH_MARK
}

export interface IEditorAddTour {
  type: ActionTypeKeys.EDITOR_ADD_TOUR
  /** The name of the new tutorial. */
  payload: string
}

export interface IEditorExportTours {
  type: ActionTypeKeys.EDITOR_EXPORT_TOURS,
  payload: ITourGuideState,
}

export interface IEditorImportTours {
  type: ActionTypeKeys.EDITOR_IMPORT_TOURS,
}

export interface IEditorToursImported {
  type: ActionTypeKeys.EDITOR_TOURS_IMPORTED,
  payload: ITourGuideState,
}

export interface IEditorInitializeTourGuide {
  type: ActionTypeKeys.EDITOR_INITIALIZE_TOUR_GUIDE
}

export interface ITourGuideUpdated {
  type: ActionTypeKeys.EDITOR_TOUR_GUIDE_UPDATED,
  payload: {
    state: ITourGuideState,
  }
}

export interface IEditorClearTourGuideState {
  type: ActionTypeKeys.EDITOR_CLEAR_TOUR_GUIDE_STATE
}

export interface IEditorRemoveTour {
  type: ActionTypeKeys.EDITOR_REMOVE_TOUR
  /** The id of the tour to be removed. */
  payload: number
}

export interface IEditorRemoveCoachMark {
  type: ActionTypeKeys.EDITOR_REMOVE_COACH_MARK
  /** The id of the coach mark to be removed. */
  payload: number
}

export interface IEditorSetMode {
  type: ActionTypeKeys.EDITOR_SET_MODE,
  payload: {
    editMode: EditorModeKeys,
  }
}

export interface IEditorSetAttributeMode {
  type: ActionTypeKeys.EDITOR_SET_ATTRIBUTE_MODE,
  payload: {
    attributeMode: AttributeModeKeys,
  }
}

export interface IEditorSetActiveCoachMarkIndex {
  type: ActionTypeKeys.EDITOR_SET_ACTIVE_COACH_MARK,
  payload: number,
}

export interface IEditorSetActiveTourIndex {
  type: ActionTypeKeys.EDITOR_SET_ACTIVE_TOUR,
  payload: number,
}

export interface IEditorModifyCoachMarkAttributes {
  type: ActionTypeKeys.EDITOR_MODIFY_COACH_MARK_ATTRIBUTES,
  payload: {
    coachMarkId: number | null,
    tourId: number | null,
    attributes: Partial<ICoachMark>,
  },
}

export interface IEditorModifyTourAttributes {
  type: ActionTypeKeys.EDITOR_MODIFY_TOUR_ATTRIBUTES,
  payload: {
    tourId: number | null,
    attributes: Partial<ITour>,
  }
}

export interface IEditorStartSelector {
  type: ActionTypeKeys.EDITOR_START_SELECTOR,
  payload: SelectorModeKeys,
}

export interface IEditorStopSelector {
  type: ActionTypeKeys.EDITOR_STOP_SELECTOR,
}

export interface IEditorSelectorStopped {
  type: ActionTypeKeys.EDITOR_SELECTOR_STOPPED,
}

export type EditorActions =
  ITourGuideUpdated |
  IEditorClearTourGuideState |
  IEditorAddCoachMark |
  IEditorAddTour |
  IEditorInitializeTourGuide |
  IEditorRemoveTour |
  IEditorRemoveCoachMark |
  IEditorSetMode |
  IEditorSetAttributeMode |
  IEditorSetActiveCoachMarkIndex |
  IEditorSetActiveTourIndex |
  IEditorModifyCoachMarkAttributes |
  IEditorModifyTourAttributes |
  IEditorStartSelector |
  IEditorStopSelector |
  IEditorSelectorStopped |
  IEditorExportTours |
  IEditorImportTours |
  IEditorToursImported

/**
 * Actions that are dispatched from the browser page.
 */
export type EditorClientIpcActions =
  ITourGuideUpdated |
  IEditorSelectorStopped

export type EditorMainIpcAction = IEditorToursImported

/**
 * Actions that are forwarded to the client page and handled by the preload scripts.
 */
export const EditorForwardedToClient = [
  ActionTypeKeys.EDITOR_ADD_COACH_MARK,
  ActionTypeKeys.EDITOR_ADD_TOUR,
  ActionTypeKeys.EDITOR_INITIALIZE_TOUR_GUIDE,
  ActionTypeKeys.EDITOR_MODIFY_COACH_MARK_ATTRIBUTES,
  ActionTypeKeys.EDITOR_MODIFY_TOUR_ATTRIBUTES,
  ActionTypeKeys.EDITOR_REMOVE_COACH_MARK,
  ActionTypeKeys.EDITOR_REMOVE_TOUR,
  ActionTypeKeys.EDITOR_SET_ACTIVE_COACH_MARK,
  ActionTypeKeys.EDITOR_SET_ACTIVE_TOUR,
  ActionTypeKeys.EDITOR_START_SELECTOR,
  ActionTypeKeys.EDITOR_STOP_SELECTOR,
  ActionTypeKeys.EDITOR_TOURS_IMPORTED
]

/**
 * Actions that are forwarded to the main thread
 */
export const EditorForwardedToMain = [
  ActionTypeKeys.EDITOR_EXPORT_TOURS,
  ActionTypeKeys.EDITOR_IMPORT_TOURS,
]

/**
 * An action that is dispatched to add a coach mark to the current tour.
 */
export const editorAddCoachMark = (): IEditorAddCoachMark => ({
  type: ActionTypeKeys.EDITOR_ADD_COACH_MARK,
})

/**
 * An action that is dispatched to add a new tour.
 * @param title - The name of the new tour.
 */
export const editorAddTour = (title: string): IEditorAddTour => ({
  type: ActionTypeKeys.EDITOR_ADD_TOUR,
  payload: title,
})

/**
 * An action that is dispatched to export a set of tours.
 * @param state - The tour guide state that will be exported.
 */
export const editorExportTours = (state: ITourGuideState): IEditorExportTours => ({
  type: ActionTypeKeys.EDITOR_EXPORT_TOURS,
  payload: state,
})

export const editorImportTours = (): IEditorImportTours => ({
  type: ActionTypeKeys.EDITOR_IMPORT_TOURS,
})

export const editorToursImported = (state: ITourGuideState): IEditorToursImported => ({
  type: ActionTypeKeys.EDITOR_TOURS_IMPORTED,
  payload: state,
})

/**
 * An action that is dispatched to initialize the tour guide script on a browser page.
 * It is intended to be used on pages that don't have the tour guide script installed.
 */
export const editorInitializeTourguide = (): IEditorInitializeTourGuide => ({
  type: ActionTypeKeys.EDITOR_INITIALIZE_TOUR_GUIDE,
})

/**
 * An action that is dispatched to remove a coach mark.
 * @param id - The id of the coach mark to be removed.
 */
export const editorRemoveCoachMark = (id: number): IEditorRemoveCoachMark => ({
  type: ActionTypeKeys.EDITOR_REMOVE_COACH_MARK,
  payload: id,
})

/**
 * An action that is dispatched to remove a tour.
 * @param id - The id of the tour to be removed.
 */
export const editorRemoveTour = (id: number): IEditorRemoveTour => ({
  type: ActionTypeKeys.EDITOR_REMOVE_TOUR,
  payload: id,
})

/**
 * An action that is dispatched to set the edit mode of the side bar.
 * @param editMode - The edit mode that the editor will be set to.
 */
export const editorSetMode = (editMode: EditorModeKeys): IEditorSetMode => ({
  type: ActionTypeKeys.EDITOR_SET_MODE,
  payload: {
    editMode,
  },
})

/**
 * An action that is dispatched to set the group of attributes that will
 * be displayed when editing coahc marks.
 * @param attributeMode - The attribute mode that will be displayed.
 */
export const editorSetAttributeMode = (attributeMode: AttributeModeKeys): IEditorSetAttributeMode => ({
  type: ActionTypeKeys.EDITOR_SET_ATTRIBUTE_MODE,
  payload: {
    attributeMode,
  },
})

/**
 * An action that gets dispatched to set the current coach mark.
 * @param index - The index of the coach mark that will be made active.
 */
export const editorSetActiveCoachMarkIndex = (index: number): IEditorSetActiveCoachMarkIndex => ({
  type: ActionTypeKeys.EDITOR_SET_ACTIVE_COACH_MARK,
  payload: index,
})

/**
 * An action that gets dispatched to set the current tour.
 * @param index - The index of the tour that will be made active.
 */
export const editorSetActiveTourIndex = (index: number): IEditorSetActiveTourIndex => ({
  type: ActionTypeKeys.EDITOR_SET_ACTIVE_TOUR,
  payload: index,
})

/**
 * An action that gets dispatched to modify a coach mark's attributes.
 * @param attributes - The attribute key value pairs that will be modified.
 */
export const editorModifyCoachMarkAttributes = (
  attributes: Partial<ICoachMark>,
  coachMarkId: number | null = null,
  tourId: number | null = null,
): IEditorModifyCoachMarkAttributes => ({
  type: ActionTypeKeys.EDITOR_MODIFY_COACH_MARK_ATTRIBUTES,
  payload: {
    attributes,
    coachMarkId,
    tourId,
  },
})

/**
 * An action that gets dispatched to modify a tour's attributes.
 * @param attributes - The tour attributes that will be modified.
 * @param tourId - (optional) The id of the tour that will be modified.
 */
export const editorModifyTourAttributes = (
  attributes: Partial<ITour>,
  tourId: number | null = null,
): IEditorModifyTourAttributes => ({
  type: ActionTypeKeys.EDITOR_MODIFY_TOUR_ATTRIBUTES,
  payload: {
    attributes,
    tourId,
  }
})

/**
 * An action that gets dispatched when the Tour Guide state on the client page changes.
 * The action's payload contains the updated Tour Guide State.
 * @param state - The updated tourguide state.
 */
export const tourGuideUpdated = (state: ITourGuideState): ITourGuideUpdated => ({
  type: ActionTypeKeys.EDITOR_TOUR_GUIDE_UPDATED,
  payload: {
    state,
  },
})

/**
 * An action that gets dispatched when a page is loaded that has no tours.
 */
export const editorClearTourGuideState = (): IEditorClearTourGuideState => ({
  type: ActionTypeKeys.EDITOR_CLEAR_TOUR_GUIDE_STATE,
})

/**
 * An action that gets dispatched when the user wants to start using the selector tool.
 * @param type - The selector mode.  Whether the tool will be used for selecting coach mark placement, progression triggers, etc.
 */
export const editorStartSelector = (type: SelectorModeKeys): IEditorStartSelector => ({
  type: ActionTypeKeys.EDITOR_START_SELECTOR,
  payload: type,
})

/**
 * An action that gets dispatched when the user wants to stop using the selector tool.
 */
export const editorStopSelector = () => ({
  type: ActionTypeKeys.EDITOR_STOP_SELECTOR,
})

/**
 * An action that gets dispatched when the selector tool stops.
 */
export const editorSelectorStopped = () => ({
  type: ActionTypeKeys.EDITOR_SELECTOR_STOPPED,
})
