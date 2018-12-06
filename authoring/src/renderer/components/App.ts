import {
  WebviewTag,
  remote,
} from 'electron'
import { Component, createElement as e } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import {
  browserInputBack,
  browserInputDevTools,
  browserInputForward,
  browserInputUrl,
  broswerInputLoadUrl,
  browserIsReady,
} from '../actions/browserActions'
import {
  editorAddCoachMark,
  editorAddTour,
  editorExportTours,
  editorImportTours,
  editorInitializeTourguide,
  editorRemoveCoachMark,
  editorRemoveTour,
  editorSetActiveCoachMarkIndex,
  editorSetActiveTourIndex,
  editorSetAttributeMode,
  editorSetMode,
  editorModifyCoachMarkAttributes,
  editorModifyTourAttributes,
  editorStartSelector,
  editorStopSelector,
} from '../actions/editorActions'
import {
  AttributeModeKeys,
  EditorModeKeys,
  ITour,
  ICoachMark,
  SelectorModeKeys,
  ITourGuideState
} from '../reducers/editorReducer'
import { getCurrentTour, IRoot } from '../reducers/root'
import Editor, { IEditorActions, IEditorProps } from './Editor'
import TopBar, { ITopBarProps } from './TopBar'
import UrlBar from './UrlBar'

import '../styles/app.scss'
import '../styles/spectrum-core.css'
import '../styles/spectrum-icons.css'
import '../styles/spectrum-light.css'

const { preloadPath } = remote.getCurrentWindow() as any

export interface IAppActions {
  onBrowserIsReady: (webview: WebviewTag) => void
  onBrowserInputBack: () => void
  onBrowserInputDevTools: () => void
  onBrowserInputForward: () => void
  onBrowserInputUrl: (url: string) => void
  onBrowserInputLoadUrl: (url: string) => void
  editorActions: IEditorActions,
}

export interface IPropsFromRoot extends IRoot {
  currentTour: ITour | null,
}

export interface IAppProps extends IPropsFromRoot, IAppActions {}

/**
 * The root React Element.
 * This element is primarily responsible for the following:
 * - Creating and instance of the <webview> tag and creating handelers for triggering and
 * listening to navigation events.
 * - Determining if the page loaded in the <webview> tag has the Tour Guide script loaded.
 * - If present, subscribing and creating event dispatchers for the Tour Guide store.
 * - If not present, injecting the Tour Guide Script into the page.
 * - Adding a component for broswer navigation.
 * - Adding an editor for creating and editing tours.
 * - Adding a top toolbar for app level actions.
 */
class App extends Component<IAppProps, {}> {
  /**
   * The React render method.
   */
  public render() {
    const {
      browser,
      currentTour,
      editor,
      onBrowserIsReady,
      onBrowserInputBack,
      onBrowserInputDevTools,
      onBrowserInputUrl,
      onBrowserInputLoadUrl,
      onBrowserInputForward,
      editorActions,
    } = this.props
    const {
      isLoading,
      isReady,
    url,
    } = browser
    const {
      attributeMode,
      editMode,
      selectorMode,
      tourGuideState,
    } = editor
    const editorProps: IEditorProps = {
      attributeMode,
      currentTour,
      editMode,
      isLoading,
      selectorMode,
      tourGuideState,
      dispatch: editorActions,
    }
    const topBarProps: ITopBarProps = {
      state: tourGuideState,
      dispatch: editorActions,
    }

    return e(
      'div',
      {
        className: 'app-container',
      },
      e<ITopBarProps>(
        TopBar,
        topBarProps,
      ),
      e(
        'div',
        {
          className: 'main',
        },
        e(
          Editor,
          editorProps,
        ),
        e(
          'div',
          { className: 'browser' },
          e(
            UrlBar,
            {
              ...browser,
              onInputUrl: onBrowserInputUrl,
              onGoBack: onBrowserInputBack,
              onGoForward: onBrowserInputForward,
              onInputLoadUrl: onBrowserInputLoadUrl,
              onToggleDevTools: onBrowserInputDevTools,
            },
          ),
          e(
            'webview',
            {
              ref: (webviewRef) => {
                if (webviewRef && !isReady) {
                  const webview = webviewRef as WebviewTag

                  webview.src = url
                  webview.addEventListener('dom-ready', () => {
                    onBrowserIsReady(webview)

                    const win = window as any
                    win.webviewContents = webview.getWebContents()
                  })
                }
              },
              allowpopups: 'true',
              preload: `file://${preloadPath}/webview.js`,
            },
          ),
        ),
      ),
    )
  }
}

const stateToProps = (state: IRoot): IPropsFromRoot => ({
  ...state,
  currentTour: getCurrentTour(state),
})

const dispatchToProps = (dispatch: Dispatch): IAppActions => {
  const editorActions: IEditorActions = {
    editorAddCoachMark: () => {
      dispatch(editorAddCoachMark())
    },
    editorAddTour: (title: string) => {
      dispatch(editorAddTour(title))
    },
    editorExportTours: (state: ITourGuideState) => {
      dispatch(editorExportTours(state))
    },
    editorImportTours: () => {
      dispatch(editorImportTours())
    },
    editorInitializeTourguide: () => {
      dispatch(editorInitializeTourguide())
    },
    editorRemoveCoachMark: (id: number) => {
      dispatch(editorRemoveCoachMark(id))
    },
    editorRemoveTour: (id: number) => {
      dispatch(editorRemoveTour(id))
    },
    editorSetAttributeMode: (attributeMode: AttributeModeKeys) => {
      dispatch(editorSetAttributeMode(attributeMode))
    },
    editorSetMode: (editMode: EditorModeKeys) => {
      dispatch(editorSetMode(editMode))
    },
    editorSetActiveCoachMarkIndex: (index: number) => {
      dispatch(editorSetActiveCoachMarkIndex(index))
    },
    editorSetActiveTourIndex: (index: number) => {
      dispatch(editorSetActiveTourIndex(index))
    },
    editorStartSelector: (type: SelectorModeKeys) => {
      dispatch(editorStartSelector(type))
    },
    editorStopSelector: () => {
      dispatch(editorStopSelector())
    },
    editorModifyCoachMarkAttributes: (
      attributes: Partial<ICoachMark>,
      coachMarkId: number | null = null,
      tourId: number | null = null,
    ) => {
      dispatch(editorModifyCoachMarkAttributes(
        attributes,
        coachMarkId,
        tourId,
      ))
    },
    editorModifyTourAttributes: (
      attributes: Partial<ITour>,
      tourId: number | null = null,
    ) => {
      dispatch(editorModifyTourAttributes(
        attributes,
        tourId,
      ))
    }
  }

  return {
    editorActions,
    onBrowserIsReady: (webview: WebviewTag) => {
      dispatch(browserIsReady(webview))
    },
    onBrowserInputBack: () => {
      dispatch(browserInputBack())
    },
    onBrowserInputDevTools: () => {
      dispatch(browserInputDevTools())
    },
    onBrowserInputForward: () => {
      dispatch(browserInputForward())
    },
    onBrowserInputUrl: (url: string) => {
      dispatch(browserInputUrl(url))
    },
    onBrowserInputLoadUrl: (url: string) => {
      dispatch(broswerInputLoadUrl(url))
    }
  }
}

export default connect(stateToProps, dispatchToProps)(App)
