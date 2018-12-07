import { createElement as e, SFC } from 'react'
import { BACK, CODE, FORWARD } from '../svg/icons'
import ToolButton from './common/ToolButton'
import TextInput from './common/TextInput'

import '../styles/urlBar.scss'

interface IUrlBar {
  canGoBack: boolean
  canGoForward: boolean
  isDevToolsOpen: boolean
  isLoading: boolean
  isReady: boolean
  url: string
  onInputUrl: (url: string) => void,
  onInputLoadUrl: (url: string) => void
  onGoBack: () => void
  onGoForward: () => void
  onToggleDevTools: () => void
}

const UrlBar: SFC<IUrlBar> = ({
  canGoBack,
  canGoForward,
  isDevToolsOpen,
  isLoading,
  isReady,
  onGoBack,
  onGoForward,
  onInputUrl,
  onInputLoadUrl,
  onToggleDevTools,
  url,
}) => e(
  'div',
  {
    className: 'url-bar',
  },
  e(
    ToolButton,
    {
      icon: BACK,
      isEnabled: isReady && canGoBack,
      onClickAction: onGoBack,
    },
  ),
  e(
    ToolButton,
    {
      icon: FORWARD,
      isEnabled: isReady && canGoForward,
      onClickAction: onGoForward,
    },
  ),
  e(
    TextInput,
    {
      customClass: 'url-input',
      value: url,
      onEnter: onInputLoadUrl,
      onChange: onInputUrl,
      selectOnFocus: true,
    },
  ),
  e(
    ToolButton,
    {
      icon: CODE,
      isEnabled: isReady,
      isActive: isDevToolsOpen,
      onClickAction: onToggleDevTools,
    },
  ),
)

export default UrlBar
