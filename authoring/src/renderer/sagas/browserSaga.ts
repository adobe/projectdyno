import {
  DidNavigateEvent,
  DidNavigateInPageEvent,
  Event,
  WebviewTag,
  WillNavigateEvent,
} from 'electron'
import { Channel, eventChannel, SagaIterator, delay } from 'redux-saga'
import {
  call,
  fork,
  put,
  take,
} from 'redux-saga/effects'
import {
  ActionTypeKeys,
  BrowserActions,
  browserDidNavigate,
  browserDidToggleDevTools,
  browserIsLoading,
  browserInputUrl,
  IBrowserIsReady,
  InputActionKeys,
} from '../actions/browserActions'
import {
  editorSetMode,
  editorClearTourGuideState,
} from '../actions/editorActions'
import {
  EditorModeKeys
} from '../reducers/editorReducer'

import url from 'url'

type NavigationEvent = DidNavigateEvent | DidNavigateInPageEvent | WillNavigateEvent

const webviewEventChannel = (webview: WebviewTag) => eventChannel<BrowserActions>((emmiter) => {
  const handleNavEvent = (evt: NavigationEvent) => {
    emmiter(browserDidNavigate(
      webview.canGoBack(),
      webview.canGoForward(),
      evt.url,
    ))
  }
  const handleDevToolsEvent = (evt: Event) => {
    const isDevToolsOpen = evt.type === 'devtools-opened'

    emmiter(browserDidToggleDevTools(isDevToolsOpen))
  }
  const handleLoadingEvent = (evt: Event) => {
    const isLoading = evt.type === 'will-navigate'

    emmiter(browserIsLoading(isLoading))
  }

  // listen for navigation events
  webview.addEventListener('will-navigate', handleNavEvent)
  webview.addEventListener('did-navigate', handleNavEvent)
  webview.addEventListener('did-navigate-in-page', handleNavEvent)

  // listen for devtools evtents
  webview.addEventListener('devtools-opened', handleDevToolsEvent)
  webview.addEventListener('devtools-closed', handleDevToolsEvent)

  // listen for loading events
  webview.addEventListener('will-navigate', handleLoadingEvent)
  webview.addEventListener('dom-ready', handleLoadingEvent)
  webview.addEventListener('did-finish-load', handleLoadingEvent)

  webview.addEventListener('new-window', (e) => {
    window.open(e.url, undefined, 'titleBarStyle=default')
  })

  // return unsubscribe function
  return () => null
})

function* handleWebviewEvents(webview: WebviewTag): SagaIterator {
  const channel: Channel<BrowserActions> = yield call(webviewEventChannel, webview)

  while (true) {
    const action: BrowserActions = yield take(channel)

    if (action.type === ActionTypeKeys.BROWSER_IS_LOADING && action.payload.isLoading === false) {
      yield put(editorSetMode(EditorModeKeys.tours))
      yield put(editorClearTourGuideState())
      yield call(delay, 700)
    }
    yield put(action)
  }
}

function* handleWebviewInput(webview: WebviewTag): SagaIterator {
  while (true) {
    const action: BrowserActions = yield take(InputActionKeys)

    switch (action.type) {
      case ActionTypeKeys.BROWSER_INPUT_BACK: {
        webview.goBack()
        break
      }
      case ActionTypeKeys.BROWSER_INPUT_FORWARD: {
        webview.goForward()
        break
      }
      case ActionTypeKeys.BROWSER_INPUT_LOAD_URL: {
        const parsedUrl = url.parse(action.payload.url)

        parsedUrl.protocol = parsedUrl.protocol ? parsedUrl.protocol : 'http'
        parsedUrl.slashes = true

        const formattedUrl = url.format(parsedUrl)

        yield put(browserIsLoading(true))
        yield put(browserInputUrl(formattedUrl))

        webview.loadURL(
          formattedUrl,
          {
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'
          }
        )
        break
      }
      case ActionTypeKeys.BROWSER_INPUT_DEV_TOOLS: {
        const isOpen = webview.isDevToolsOpened()

        if (isOpen) {
          webview.closeDevTools()
        } else {
          webview.openDevTools()
        }
        break
      }
      default: {
        break
      }
    }
  }
}

function* broswerSaga(): SagaIterator {
  const webviewIsReadyAction: IBrowserIsReady = yield take(ActionTypeKeys.BROWSER_IS_READY)
  const { payload } = webviewIsReadyAction
  const { webview } = payload

  const webContents = webview.getWebContents()

  webContents.clearHistory
  webContents.session.clearStorageData()
  webContents.session.clearCache(() => null)
  webContents.session.allowNTLMCredentialsForDomains('*')

  yield fork(handleWebviewEvents, webview)
  yield fork(handleWebviewInput, webview)
}

export default broswerSaga
