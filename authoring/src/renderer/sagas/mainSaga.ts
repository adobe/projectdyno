import { SagaIterator, eventChannel, Channel } from '../../../node_modules/redux-saga'
import { ipcRenderer, IpcMessageEvent } from 'electron'
import { EditorMainIpcAction } from '../actions/editorActions'
import { call, put, take } from 'redux-saga/effects'

export interface IRawAction {
  type: string,
  payload: string,
}

const mainIpcChannel = () => eventChannel<EditorMainIpcAction>((emmiter) => {
  ipcRenderer.on('tour-guide', (evt:IpcMessageEvent, args: any) => {
    const rawAction = args as IRawAction
    const action = {
      ...rawAction,
      payload: JSON.parse(rawAction.payload)
    } as EditorMainIpcAction

    emmiter(action)
  })

  // return unsubscribe function
  return () => null
})


function* mainSaga(): SagaIterator {
  const channel:Channel<EditorMainIpcAction> = yield call(mainIpcChannel)

  while (true) {
    const action = yield take(channel)

    yield put(action)
  }
}

export default mainSaga
