import { createElement as e, SFC } from 'react'
import Modal, { IModalProps } from '../../common/Modal'
import { IEditorActions } from '../../Editor';

export interface IDeleteModalProps {
  dispatch: IEditorActions,
  isVisable: boolean,
  tourIndex: number,
  toggle: () => void,
}

const DeleteTourModal: SFC<IDeleteModalProps> = ({
  dispatch,
  isVisable,
  tourIndex,
  toggle,
}) => e<IModalProps>(
  Modal,
  {
    isVisable,
  },
  e(
    'div',
    {
      className: 'tour-modal',
    },
    e(
      'h2',
      null,
      'Delete Tutorial'
    ),
    e(
      'div',
      {
        className: 'button-row',
      },
      e(
        'button',
        {
          className: 'spectrum-Button spectrum-Button--secondary',
          onClick: () => toggle(),
        },
        'Cancel',
      ),
      e(
        'button',
        {
          className: 'spectrum-Button spectrum-Button--warning',
          onClick: () => {
            toggle()
            dispatch.editorRemoveTour(tourIndex)
          },
        },
        'Delete',
      ),
    )
  ),
)

export default DeleteTourModal
