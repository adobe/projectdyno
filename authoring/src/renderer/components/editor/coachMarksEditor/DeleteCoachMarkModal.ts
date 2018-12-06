import { createElement as e, SFC } from 'react'
import Modal, { IModalProps } from '../../common/Modal'
import { IEditorActions } from '../../Editor';

export interface IDeleteCoachMarkModalProps {
  dispatch: IEditorActions,
  isVisable: boolean,
  coachMarkIndex: number,
  toggle: () => void,
}

const DeleteCoachMarkModal: SFC<IDeleteCoachMarkModalProps> = ({
  coachMarkIndex,
  dispatch,
  isVisable,
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
      'Delete Coach Mark'
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
            dispatch.editorRemoveCoachMark(coachMarkIndex)
          },
        },
        'Delete',
      ),
    )
  ),
)

export default DeleteCoachMarkModal
