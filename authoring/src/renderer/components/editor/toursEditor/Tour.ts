import { Attributes, createElement as e, Component } from 'react'
import { EditorModeKeys } from '../../../reducers/editorReducer'
import { EDIT, FORWARD, TRASH } from '../../../svg/icons'
import ToolButton, { IToolButtonProps } from '../../common/ToolButton'
import EditTourModal, { IEditTourModalProps } from './EditTourModal'
import DeleteTourModal, { IDeleteModalProps } from './DeleteTourModal'

import '../../../styles/editor/toursEditor/tour.scss'
import { IEditorActions } from '../../Editor';

export interface ITourProps extends Attributes {
  dispatch: IEditorActions,
  index: number,
  title: string,
}

export interface ITourState {
  isEditModalOpen: boolean,
  isDeleteModalOpen: boolean,
}

class Tour extends Component<ITourProps, ITourState> {
  state: ITourState = {
    isEditModalOpen: false,
    isDeleteModalOpen: false,
  }

  toggleEditModal = () => {
    this.setState({
      ...this.state,
      isEditModalOpen: !this.state.isEditModalOpen,
    })
  }

  toggleDeleteModal = () => {
    this.setState({
      ...this.state,
      isDeleteModalOpen: !this.state.isDeleteModalOpen,
    })
  }

  render() {
    const {
      dispatch,
      index,
      title,
    } = this.props

    const deleteProps: IToolButtonProps = {
      icon: TRASH,
      isEnabled: true,
      isActive: false,
      onClickAction: () => this.toggleDeleteModal(),
    }

    const editProps: IToolButtonProps = {
      icon: EDIT,
      isEnabled: true,
      isActive: false,
      onClickAction: () => this.toggleEditModal(),
    }

    const forwardProps: IToolButtonProps = {
      icon: FORWARD,
      isEnabled: true,
      isActive: false,
      onClickAction: () => {
        dispatch.editorSetActiveTourIndex(index)
        dispatch.editorSetMode(EditorModeKeys.coachmarks)
      },
    }

    return e(
      'div',
      { className: 'tour' },
      e(
        'div',
        {
          className: 'title',
        },
        title,
      ),
      e(ToolButton, editProps),
      e(ToolButton, deleteProps),
      e(ToolButton, forwardProps),
      e<IEditTourModalProps>(
        EditTourModal,
        {
          isVisable: this.state.isEditModalOpen,
          key: `edit-${index}`,
          tourIndex: index,
          tutorialName: title,
          toggle: this.toggleEditModal,
          dispatch,
        }
      ),
      e<IDeleteModalProps>(
        DeleteTourModal,
        {
          isVisable: this.state.isDeleteModalOpen,
          key: `delete-${index}`,
          tourIndex: index,
          toggle: this.toggleDeleteModal,
          dispatch,
        }
      ),
    )
  }
}

export default Tour
