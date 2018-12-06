import { createElement as e, SFC } from 'react'
import ToolButton, { IToolButtonProps } from '../../common/ToolButton'
import { ADD } from '../../../svg/icons'

import '../../../styles/editor/coachMarksEditor/addStep.scss'

export interface IAddStepProps {
  onClickAction: () => void,
}

const AddStep: SFC<IAddStepProps> = ({
  onClickAction,
}) => e(
  'div',
  {
    className: 'add-step',
    onClick: onClickAction,
    style: {
      marginLeft: -8,
    }
  },
  e<IToolButtonProps>(
    ToolButton,
    {
      icon: ADD,
      isEnabled: true,
      onClickAction,
    }
  ),
  'Add Step',
)

export default AddStep
