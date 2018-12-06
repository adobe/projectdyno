import { createElement as e, StatelessComponent} from 'react'
import '../../styles/common/ToolTip.scss'

const ToolTip: StatelessComponent = ({ children }) => e(
  'div',
  {
    className: 'tool-tip-container',
  },
  e(
    'div',
    {
      className: 'tool-tip',
    },
    children,
  ),
)

export default ToolTip
