import { createElement as e, Component } from 'react'
import Modal from '../../common/Modal'
import { IEditorActions } from '../../Editor';
import TextInput, { ITextInputProps } from '../../common/TextInput'

export interface ICreateTourModalProps {
  isVisable: boolean,
  onToggleVisable: () => void,
  dispatch: IEditorActions,
  tutorialName: string,
}

export interface ICreateTourModalState {
  tutorialName: string,
  isVisable: boolean,
}

class CreateTourModal extends Component<ICreateTourModalProps, ICreateTourModalState> {
  state = {
    tutorialName: '',
    isVisable: false,
  }

  static getDerivedStateFromProps(props: ICreateTourModalProps, state: ICreateTourModalState) {
    if (props.isVisable !== state.isVisable) {
      return {
        tutorialName: props.tutorialName,
        isVisable: props.isVisable,
      }
    }

    return null
  }

  handleInput(value: string) {
    this.setState({
      ...this.state,
      tutorialName: value,
    })
  }

  render() {
    const {
      dispatch,
      isVisable,
      onToggleVisable,
    } = this.props
    const textInputProps: ITextInputProps = {
      customClass: 'input',
      placeholder: 'Type here',
      value: this.state.tutorialName,
      onEnter: () => null,
      onChange: (value: string) => this.handleInput(value),
    }

    return e(
      Modal,
      {
        isVisable,
      },
      e(
        'div',
        {
          className: 'tour-modal'
        },
        e(
          'h2',
          null,
          'Create New Tutorial',
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
            this.state.tutorialName.length,
          )
        ),
        e<ITextInputProps>(
          TextInput,
          textInputProps,
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
              onClick: () => {
                onToggleVisable()
              },
            },
            'Cancel'
          ),
          e(
            'button',
            {
              className: 'spectrum-Button spectrum-Button--cta',
              onClick: () => {

                dispatch.editorAddTour(this.state.tutorialName)
                onToggleVisable()
              },
            },
            'Create',
          )
        ),
      )
    )
  }
}

export default CreateTourModal
