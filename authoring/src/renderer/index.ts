import { createElement as e } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {
  AnyAction,
  applyMiddleware,
  compose,
  createStore,
  Store,
} from 'redux'
import { default as createSagaMiddleware } from 'redux-saga'

import App from './components/App'
import root, { IRoot } from './reducers/root'
import start from './sagas/start'

const appElement: HTMLElement | null = document.getElementById('app')
const sagaMiddleware = createSagaMiddleware()
const win = window as any
const composeEnhancers = win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store: Store<IRoot, AnyAction> = createStore(
  root,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(start)

render(
  e(
    Provider,
    {
      store,
    },
    e(App),
  ),
  appElement,
)
