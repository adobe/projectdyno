import { createElement as e, SFC } from 'react'
import classNames from 'classnames'

import '../../styles/common/toolButtonLite.scss';

export interface IToolButtonProps {
  /** SVG path data for button icon. */
  icon: string
  /** Determines if the button is active (i.e. an action is currently being performed) or not. */
  isActive?: boolean
  /** Determines if the button is enabled or not. */
  isEnabled: boolean
  /** The width of the button. Default value is 32. */
  width?: number
  /** The height of the button.  Default value is 32. */
  height?: number
  /** The width of the icon.  Default value is 18. */
  iconWidth?: number
  /** The height of the icon.  Default value is 18. */
  iconHeight?: number
  /** A function that will be called when the button is clicked. */
  onClickAction?: (e: MouseEvent) => any
  /** A function that will be called when the button is clicked. */
  onMouseDownAction?: (e: MouseEvent) => any
}

const ToolButtonLite: SFC<IToolButtonProps> = ({
  icon,
  isEnabled,
  isActive,
  onClickAction,
  onMouseDownAction,
  width,
  height,
  iconWidth,
  iconHeight,
}) => e(
  'button',
  {
    className: classNames(
      'tool-button-lite',
      {
        'disabled': !isEnabled,
        'active': isActive,
      }
    ),
    style: {
      width,
      height,
    },
    disabled: isEnabled ? null : 'true',
    onClick: onClickAction,
    onMouseDown: onMouseDownAction,
  },
  e(
    'svg',
    {
      style: {
        width: iconWidth,
        height: iconHeight,
      },
    },
    e(
      'path',
      {
        d: icon,
      },
    ),
  ),
)

ToolButtonLite.defaultProps = {
  width: 18,
  height: 18,
  iconWidth: 18,
  iconHeight: 18,
}

export default ToolButtonLite
