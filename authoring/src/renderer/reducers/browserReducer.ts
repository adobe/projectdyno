import { Reducer } from 'redux'
import { ActionTypeKeys as actionType, BrowserActions } from '../actions/browserActions'

export interface IBroswerState {
  canGoBack: boolean,
  canGoForward: boolean,
  isDevToolsOpen: boolean,
  isLoading: boolean,
  isReady: boolean,
  url: string,
}

const initialState: IBroswerState = {
  canGoBack: false,
  canGoForward: false,
  isDevToolsOpen: false,
  isLoading: true,
  isReady: false,
  url: 'https://tourguide.blob.core.windows.net/demo/index.html',
}

const browserReducer: Reducer<IBroswerState, BrowserActions> = (
  state: IBroswerState = initialState,
  action: BrowserActions,
) => {
  switch (action.type) {
    case actionType.BROWSER_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    }
    case actionType.BROWSER_IS_READY: {
      return {
        ...state,
        isReady: true,
      }
    }
    case actionType.BROWSER_DID_NAVIGATE: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case actionType.BROWSER_DID_TOGGLE_DEV_TOOLS: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case actionType.BROWSER_INPUT_URL: {
      return {
        ...state,
        url: action.payload.url,
      }
    }
    default: {
      return state
    }
  }
}

export default browserReducer
