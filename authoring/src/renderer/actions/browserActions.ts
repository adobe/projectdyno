import { WebviewTag } from 'electron'

export enum ActionTypeKeys {
  BROWSER_DID_NAVIGATE = 'BROWSER_DID_NAVIGATE',
  BROWSER_DID_TOGGLE_DEV_TOOLS = 'BROWSER_DID_TOGGLE_DEV_TOOLS',
  BROWSER_INPUT_BACK = 'BROWSER_INPUT_BACK',
  BROWSER_INPUT_FORWARD = 'BROWSER_INPUT_FORWARD',
  BROWSER_INPUT_DEV_TOOLS = 'BROWSER_INPUT_DEV_TOOLS',
  BROWSER_INPUT_URL = 'BROWSER_INPUT_URL',
  BROWSER_INPUT_LOAD_URL = 'BROWSER_INPUT_LOAD_URL',
  BROWSER_IS_READY = 'BROWSER_IS_READY',
  BROWSER_IS_LOADING = 'BROWSER_IS_LOADING',
}

export interface IBrowserIsReady {
  type: ActionTypeKeys.BROWSER_IS_READY,
  payload: {
    webview: WebviewTag,
  }
}

export interface IBrowserDidNavigate {
  type: ActionTypeKeys.BROWSER_DID_NAVIGATE,
  payload: {
    canGoBack: boolean,
    canGoForward: boolean,
    url: string,
  }
}

export interface IBrowserDidToggleDevTools {
  type: ActionTypeKeys.BROWSER_DID_TOGGLE_DEV_TOOLS,
  payload: {
    isDevToolsOpen: boolean,
  }
}

export interface IBrowserInputUrl {
  type: ActionTypeKeys.BROWSER_INPUT_URL,
  payload: {
    url: string,
  }
}

export interface IBrowserInputLoadUrl {
  type: ActionTypeKeys.BROWSER_INPUT_LOAD_URL,
  payload: {
    url: string,
  }
}

export interface IBrowserInputBack {
  type: ActionTypeKeys.BROWSER_INPUT_BACK,
}

export interface IBrowserInputForward {
  type: ActionTypeKeys.BROWSER_INPUT_FORWARD,
}

export interface IBrowserInputDevTools {
  type: ActionTypeKeys.BROWSER_INPUT_DEV_TOOLS,
}

export interface IBrowserIsLoading {
  type: ActionTypeKeys.BROWSER_IS_LOADING,
  payload: {
    isLoading: boolean,
  }
}

export type BrowserActions =
  IBrowserIsReady |
  IBrowserIsLoading |
  IBrowserDidNavigate |
  IBrowserDidToggleDevTools |
  IBrowserInputBack |
  IBrowserInputDevTools |
  IBrowserInputForward |
  IBrowserInputUrl |
  IBrowserInputLoadUrl

export const InputActionKeys = [
  ActionTypeKeys.BROWSER_INPUT_BACK,
  ActionTypeKeys.BROWSER_INPUT_DEV_TOOLS,
  ActionTypeKeys.BROWSER_INPUT_FORWARD,
  ActionTypeKeys.BROWSER_INPUT_LOAD_URL,
]

/**
 * An action that is dispatched when the webview methods are available.
 * Webview methods should not be called until this action is dispatched.
 * This is because webview methods aren't immediatly available.
 * For more information: https://electronjs.org/docs/api/webview-tag#methods.
 * @param webview - A reference to a webview element.
 */
export const browserIsReady = (webview: WebviewTag): IBrowserIsReady => ({
  type: ActionTypeKeys.BROWSER_IS_READY,
  payload: {
    webview,
  },
})

/**
 * An action that is dispatched on the following webview events:
 * - will-navigate
 * - did-navigate
 * - did-navigate-in-page
 * @param canGoBack - Whether or not the webview can go back.
 * @param canGoForward - Whether or not the webview can go forward.
 * @param url - The url the webview is navigating to.
 */
export const browserDidNavigate = (
  canGoBack: boolean,
  canGoForward: boolean,
  url: string,
): IBrowserDidNavigate => ({
  type: ActionTypeKeys.BROWSER_DID_NAVIGATE,
  payload: {
    canGoBack,
    canGoForward,
    url,
  },
})

/**
 * An action that is dispatched when the web view dev tools open or close.
 * @param isOpen - Whether the dev tools are open or not.
 */
export const browserDidToggleDevTools = (isDevToolsOpen: boolean): IBrowserDidToggleDevTools => ({
  type: ActionTypeKeys.BROWSER_DID_TOGGLE_DEV_TOOLS,
  payload: {
    isDevToolsOpen,
  },
})

/**
 * An action that gets dispatched when a user changes the url in the url bar.
 * @param url - The url that was inputed.
 */
export const browserInputUrl = (url: string): IBrowserInputUrl => ({
  type: ActionTypeKeys.BROWSER_INPUT_URL,
  payload: {
    url,
  },
})

/**
 * An action that gets dispatched when a new url is to be loaded.
 * @param url - The url that will be loaded.
 */
export const broswerInputLoadUrl = (url: string): IBrowserInputLoadUrl => ({
  type: ActionTypeKeys.BROWSER_INPUT_LOAD_URL,
  payload: {
    url,
  }
})

/**
 * Dispatching this action will cause the browser to navigate back if possible.
 */
export const browserInputBack = (): IBrowserInputBack => ({
  type: ActionTypeKeys.BROWSER_INPUT_BACK,
})

/**
 * Dispatching this action will cause the browser to navigate forward if possible.
 */
export const browserInputForward = (): IBrowserInputForward => ({
  type: ActionTypeKeys.BROWSER_INPUT_FORWARD,
})

/**
 * Dispatching this action will toggle the client page dev tools open or closed.
 */
export const browserInputDevTools = (): IBrowserInputDevTools => ({
  type: ActionTypeKeys.BROWSER_INPUT_DEV_TOOLS,
})

/**
 * An action that gets dispatched when the webview starts and stops loading a page.
 * @param isLoading - Whether the webview is loading or not.
 */
export const browserIsLoading = (isLoading: boolean): IBrowserIsLoading => ({
  type: ActionTypeKeys.BROWSER_IS_LOADING,
  payload: {
    isLoading,
  },
})
