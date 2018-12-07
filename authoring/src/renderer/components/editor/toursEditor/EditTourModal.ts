import { createElement as e, Component } from 'react'
import Modal, { IModalProps } from '../../common/Modal'
import TextInput, { ITextInputProps } from '../../common/TextInput'
import { IEditorActions } from '../../Editor';

export interface IEditTourModalProps {
  dispatch: IEditorActions,
  isVisable: boolean,
  tourIndex: number,
  tutorialName: string,
  toggle: () => void,
}

export interface IEditorModalState {
  tutorialName: string,
  isVisable: boolean,
}

class EditTourModal extends Component<IEditTourModalProps> {

  static getDerivedStateFromProps(props: IEditTourModalProps, state: IEditorModalState) {
    if(props.isVisable !== state.isVisable) {
      return {
        isVisable: props.isVisable,
        tutorialName: props.tutorialName,
      }
    }

    return null
  }

  state = {
    isVisable: false,
    tutorialName: '',
  }

  handleNameChange = (input: string) => {
    this.setState({
      ...this.state,
      tutorialName: input,
    })
  }

  render() {
    const {
      dispatch,
      toggle,
      tourIndex,
    } = this.props
    const {
      isVisable,
      tutorialName,
    } = this.state

    return e<IModalProps>(
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
          'Edit Tutorial'
        ),
        e(
          'div',
          {
            className: 'flex-row',
          },
          e(
            'div',
            {
              className: 'flex-expand',
            },
            'Tutorial Name',
          ),
          e(
            'div',
            null,
            tutorialName.length,
          ),
        ),
        e<ITextInputProps>(
          TextInput,
          {
            customClass: 'input',
            placeholder: 'Type here',
            value: tutorialName,
            onEnter: (value: string) => this.handleNameChange(value),
            onChange: (value: string) => this.handleNameChange(value),
          },

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
              className: 'spectrum-Button spectrum-Button--cta',
              onClick: () => {
                toggle()
                dispatch.editorModifyTourAttributes(
                  {
                    title: tutorialName,
                  },
                  tourIndex
                )
              },
            },
            'Edit',
          ),
        )
      ),
    )
  }
}

export default EditTourModal
