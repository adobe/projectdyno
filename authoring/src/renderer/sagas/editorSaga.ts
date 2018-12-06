import axios from 'axios'
import { IpcMessageEvent, WebviewTag, ipcRenderer } from 'electron'
import { Channel, eventChannel, SagaIterator } from 'redux-saga'
import { call, cancel, fork, put, select, take } from 'redux-saga/effects'
import url from 'url'
import {
  ActionTypeKeys as BrowserATK,
  IBrowserIsReady,
} from '../actions/browserActions'
import {
  EditorActions,
  EditorClientIpcActions,
  EditorForwardedToClient,
  EditorForwardedToMain,
  editorSetMode,
  ActionTypeKeys,
  IEditorModifyCoachMarkAttributes,
  IEditorExportTours,
  editorStopSelector,
} from '../actions/editorActions'
import { EditorModeKeys, SelectorModeKeys } from  '../reducers/editorReducer'
import { Action } from 'redux'
import { IRoot } from '../reducers/root'

let imageValidationTask: any = null

/**
 * This function validates an image url and calculates the width and height of the image.
 * @param webview - The application's web view
 * @param action - The modify coach mark attributes action for the image url attribute.
 */
function* validateImageUrl(webview: WebviewTag, action: IEditorModifyCoachMarkAttributes) {
  const pageUrl = webview.getURL()
  const inputUrl = action.payload.attributes.media ? action.payload.attributes.media.src : ''
  const parsedPageUrl = url.parse(pageUrl)
  const parsedInputUrl = url.parse(inputUrl)
  const protocol = parsedInputUrl.protocol || parsedPageUrl.protocol
  const hostname = parsedInputUrl.hostname || parsedPageUrl.hostname
  const port = (() => {
    if (parsedInputUrl.hostname) {
      return parsedInputUrl.port
    }

    return parsedPageUrl.port
  })()
  const imagePath = parsedInputUrl.path ? parsedInputUrl.path.replace(/^\./, '') : ''
  const portString = port ? `:${port}` : ''
  const imageUrl = `${protocol}//${hostname}${portString}${imagePath}`
  const requestConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    responseType: 'blob',
  }
  const response = yield axios.get(imageUrl, requestConfig).catch((err) => {
    return { data: null }
  })
  const { data: imageBlob } = response
  const blobIsValid = imageBlob && [
    'image/gif',
    'image/png',
    'image/jpeg',
    'image/bmp',
    'image/webp',
  ].includes(imageBlob.type)

  if (blobIsValid) {
    const imgUrl = window.URL.createObjectURL(imageBlob)
    const img = new Image()

    img.addEventListener('load', () => {
      const { payload } = action
      const { attributes } = payload
      const { media } = attributes
      const ratio = 278 / img.naturalWidth
      const newMedia = {
        ...media,
        height: img.naturalHeight * ratio,
        width: img.naturalWidth * ratio,
      }
      const newAction = {
        ...action,
        payload: {
          ...payload,
          attributes: {
            ...attributes,
            media: newMedia,
          }
        }
      }

      webview.send('tour-guide', newAction)
    })
    img.src = imgUrl
  } else {
    webview.send('tour-guide', action)
  }
}

/**
 * This saga forwards certian actions to the webview through an ipc channel.
 * @param webview - The webview that actions will be forwarded to.
 */
function* forwardEditorActionsToWebview(webview: WebviewTag): SagaIterator {
  while (true) {
    const forwardedAction: EditorActions = yield take(EditorForwardedToClient)

    switch (forwardedAction.type) {
      case ActionTypeKeys.EDITOR_MODIFY_COACH_MARK_ATTRIBUTES: {
        if (forwardedAction.payload.attributes.media) {
          if (imageValidationTask) {
            yield cancel(imageValidationTask)
          }

          imageValidationTask = yield fork(
            validateImageUrl,
            webview,
            forwardedAction,
          )
        } else {
          webview.send('tour-guide', forwardedAction)
        }
        break
      }
      case ActionTypeKeys.EDITOR_ADD_TOUR: {
        webview.send('tour-guide', forwardedAction)
        yield put(editorSetMode(EditorModeKeys.coachmarks))
        break
      }
      default: {
        webview.send('tour-guide', forwardedAction)
        break
      }
    }
  }
}

const webviewIpcChannel = (webview: WebviewTag) =>
  eventChannel<EditorClientIpcActions>((emmiter) => {
    webview.addEventListener('ipc-message', (evt: IpcMessageEvent) => {
      if (evt.channel === 'tour-guide') {
        const action = evt.args[0] as EditorClientIpcActions

        emmiter(action)
      }
    })

    // return unsubscribe function
    return () => null
  })

function* handleTourGuideUpdates(webview: WebviewTag): SagaIterator {
  const channel: Channel<EditorClientIpcActions> = yield call(webviewIpcChannel, webview)

  while (true) {
    const action: EditorClientIpcActions = yield take(channel)

    yield put(action)
  }
}

function* handlePageLoads(webview: WebviewTag): SagaIterator {
  webview.addEventListener('did-stop-loading', () => {
    webview.executeJavaScript('onPageLoad()')
  })
}

function* handleExportAction(): SagaIterator {
  while(true){
    const exportAction: IEditorExportTours = yield take(EditorForwardedToMain)

    ipcRenderer.send('tour-guide', exportAction)
  }
}

function* handleStopSelector(): SagaIterator {
  while(true){
    yield take((action: Action) => {
      const { type } = action
      const isNotValid = [
        ActionTypeKeys.EDITOR_START_SELECTOR,
        ActionTypeKeys.EDITOR_STOP_SELECTOR,
        ActionTypeKeys.EDITOR_SELECTOR_STOPPED,
        ActionTypeKeys.EDITOR_TOUR_GUIDE_UPDATED
      ].includes(type)

      return !isNotValid
    })
    const state: IRoot = yield select()

    if (state.editor.selectorMode !== SelectorModeKeys.NONE) {
      yield put(editorStopSelector())
    }
  }
}

function* editorSaga(): SagaIterator {
  const browserIsReadyAction: IBrowserIsReady = yield take(BrowserATK.BROWSER_IS_READY)
  const webview: WebviewTag = browserIsReadyAction.payload.webview

  yield fork(handleTourGuideUpdates, webview)
  yield fork(forwardEditorActionsToWebview, webview)
  yield fork(handlePageLoads, webview)
  yield fork(handleExportAction)
  yield fork(handleStopSelector)
}

export default editorSaga
