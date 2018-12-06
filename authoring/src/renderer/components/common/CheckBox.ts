import { createElement as e, SFC } from 'react'
import classNames from 'classnames'

import '../../styles/common/checkbox.scss'

export interface ICheckBox {
  label: string,
  value: boolean,
  isEnabled: boolean,
  onClick: (value: boolean) => void,
}

const CheckBox: SFC<ICheckBox> = ({
  isEnabled,
  label,
  onClick,
  value,
}) => {
  const className = classNames(
    'checkbox',
    {
      disabled: !isEnabled,
    }
  )

  return e(
    'div',
    {
      className,
      onClick,
    },
    e(
      'input',
      {
        type: 'checkbox',
        checked: value,
        onChange: onClick,
        disabled: isEnabled ? null : "true",
      }
    ),
    e(
      'div',
      {
        className: 'label',
      },
      label,
    )
  )
}

export default CheckBox
