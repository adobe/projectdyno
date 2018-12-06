import { createElement as e, StatelessComponent } from  'react'
import Loader from '../common/Loader'

const Loading: StatelessComponent = () => e(
  'div',
  {
    className: 'loading'
  },
  e(Loader),
)

export default Loading
