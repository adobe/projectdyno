import { createElement as e, StatelessComponent } from 'react'
import { remote } from 'electron'
import { IEditorActions } from '../Editor'

import '../../styles/editor/unitialized.scss'

export interface IUninitializedProps {
  dispatch: IEditorActions
}

const { imagePath } = remote.getCurrentWindow() as any

const Uninitialized: StatelessComponent<IUninitializedProps> = ({
  dispatch,
}) => e(
  'div',
  {
    className: 'uninitialized',
  },
  e(
    'img',
    {
      src: `${imagePath}/coachmarks_02.gif`
    }
  ),
  e(
    'h2',
    null,
    'Create Your First Tour',
  ),
  e(
    'button',
    {
      className: 'spectrum-Button spectrum-Button--cta',
      onClick: () => dispatch.editorInitializeTourguide(),
    },
    'Get Started',
  )
)

export default Uninitialized
