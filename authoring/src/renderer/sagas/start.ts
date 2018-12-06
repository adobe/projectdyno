import { SagaIterator } from 'redux-saga'
import { fork } from 'redux-saga/effects'
import browserSaga from './browserSaga'
import editorSaga from './editorSaga'
import mainSaga from './mainSaga'

function* start(): SagaIterator {
  yield fork(browserSaga)
  yield fork(editorSaga)
  yield fork(mainSaga)
}

export default start
