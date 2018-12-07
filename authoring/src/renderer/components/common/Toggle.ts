import { createElement as e, StatelessComponent } from 'react'

export interface IToggleProps {
  label: string,
  value: boolean,
  isEnabled: boolean,
  onClickAction: (value: boolean) => void,
}

const Toggle: StatelessComponent<IToggleProps> = ({
  isEnabled,
  value,
  label,
  onClickAction,
}) => e(
  'div',
  {
    className: 'spectrum-ToggleSwitch',
    style: {
      height: 18,
      verticalAlign: 'middle',
    }
  },
  e(
    'input',
    {
      type: 'checkbox',
      className: 'spectrum-ToggleSwitch-input',
      checked: value,
      id: 'toggle-onoff-0',
      onChange: () => onClickAction(!value),
      disabled: isEnabled ? null : 'true',
    }
  ),
  e(
    'span',
    {
      className: 'spectrum-ToggleSwitch-switch',
      style: {
        verticalAlign: 'unset',
      }
    }
  ),
  e(
    'label',
    {
      className: 'spectrum-ToggleSwitch-label',
      htmlFor: 'toggle-onoff-0',
    },
    label,
  )
)

export default Toggle
