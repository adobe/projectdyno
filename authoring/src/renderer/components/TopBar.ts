import { createElement as e, Component } from 'react'
import { EXPORT, IMPORT } from '../svg/icons'
import '../styles/topBar.scss'
import { ITourGuideState } from '../reducers/editorReducer';
import { IEditorActions } from './Editor';

export interface ITopBarProps {
  state: ITourGuideState | undefined,
  dispatch: IEditorActions,
}

class TopBar extends Component<ITopBarProps> {
  render() {
    const {
      state,
      dispatch,
    } = this.props

    return e(
      'div',
      {
        className: 'top-bar',
      },
      e(
        'button',
        {
          className: 'spectrum-ActionButton',
          style: {
            height: 26,
          },
          onClick: () => {
            dispatch.editorImportTours()
          },
        },
        e(
          'svg',
          {
            width: 11,
            height: 11,
          },
          e(
            'path',
            {
              d: IMPORT,
            },
          ),
        ),
        'Import'
      ),
      e(
        'button',
        {
          className: 'spectrum-ActionButton',
          style: {
            height: 26,
            marginLeft: 0,
          },
          onClick: () => {
            if (state) {
              dispatch.editorExportTours(state)
            }
          },
        },
        e(
          'svg',
          {
            width: 11,
            height: 11,
          },
          e(
            'path',
            {
              d: EXPORT,
            },
          ),
        ),
        'Export'
      )
    )
  }
}

export default TopBar
