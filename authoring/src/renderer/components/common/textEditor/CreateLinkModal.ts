import { createElement as e, Component } from 'react'
import {default as urlUtils } from 'url'
import Modal from '../Modal'
import TextInput, { ITextInputProps } from '../TextInput'
import { SelectionState } from '../../../../../node_modules/@types/draft-js';

export interface ICreateLinkModalProps {
  isVisable: boolean,
  onToggleVisable: () => void,
  onCreate: (url: string, selectionState: SelectionState | null) => void,
  url: string,
  selection: SelectionState,
}

export interface ICreateLinkModalState {
  url: string,
  isVisable: boolean,
  selection: SelectionState | null,
}

class CreateLinkModal extends Component<ICreateLinkModalProps, ICreateLinkModalState> {
  state = {
    url: '',
    isVisable: false,
    selection: null,
  }

  static getDerivedStateFromProps(props: ICreateLinkModalProps, state: ICreateLinkModalState) {
    if (props.isVisable !== state.isVisable) {
      return {
        url: props.url,
        isVisable: props.isVisable,
        selection: props.selection,
      }
    }

    return null
  }

  handleInput(value: string) {
    this.setState({
      ...this.state,
      url: value,
    })
  }

  render() {
    const {
      isVisable,
      onToggleVisable,
      onCreate,
    } = this.props
    const {
      url,
      selection,
    } = this.state
    const textInputProps: ITextInputProps = {
      customClass: 'input',
      placeholder: 'Type here',
      value: url,
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
          'Create Link',
        ),
        e(
          'div',
          null,
          'Enter the URL for the link.  Linked pages will open in a new tab.'
        ),
        e('p'),
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
            'Link URL',
          ),
          e(
            'div',
            null,
            this.state.url.length,
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
                const parsedUrl = urlUtils.parse(url)

                parsedUrl.protocol = parsedUrl.protocol ? parsedUrl.protocol : 'http'
                parsedUrl.slashes = true

                const formattedUrl = urlUtils.format(parsedUrl)

                onCreate(formattedUrl, selection)
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

export default CreateLinkModal
