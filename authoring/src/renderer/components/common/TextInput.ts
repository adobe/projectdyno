import { Component, createElement as e, KeyboardEvent, SyntheticEvent } from 'react'
import '../../styles/common/textInput.scss'

export interface ITextInputProps {
  customClass?: string,
  placeholder?: string,
  value: string,
  onEnter: (value: string) => any,
  onChange: (value: string) => any,
  selectOnFocus?: boolean,
}

interface ITextInputState {
  value: string,
  inputRef: null | HTMLInputElement,
  selectionStart: number,
  selectionEnd: number,
}

class TextInput extends Component<ITextInputProps, ITextInputState> {

  state: ITextInputState = {
    value: '',
    inputRef: null,
    selectionStart: 0,
    selectionEnd: 0,
  }

  focusTimerId: NodeJS.Timer | null = null

  componentDidUpdate() {
    const { inputRef, selectionStart, selectionEnd } = this.state

    if (inputRef) {
      inputRef.setSelectionRange(selectionStart, selectionEnd)
    }
  }

  componentWillUnmount() {
    if (this.focusTimerId) {
      clearInterval(this.focusTimerId)
    }
  }

  public static getDerivedStateFromProps(props: ITextInputProps, state: ITextInputState): any {
    if (props.value !== state.value) {
      return {
        value: props.value,
      }
    }

    return null
  }

  public render() {
    const { customClass, placeholder } = this.props
    const { value } = this.state

    return e(
      'input',
      {
        value,
        className: `spectrum-Textfield textInput ${customClass ? customClass : ''}`,
        ref: (ref: HTMLInputElement) => {
          if (!this.state.inputRef) {
            this.setState({
              ...this.state,
              inputRef: ref,
            })
          }
        },
        onChange: this.onChangeHandler,
        onKeyDown: this.onEnterHandler,
        onFocus: (evt) => {
          if (this.props.selectOnFocus && this.state.inputRef) {
            if (this.focusTimerId) {
              clearInterval(this.focusTimerId)
            }
            this.focusTimerId = setTimeout(
              () => {
                const { inputRef } = this.state

                const selectionStart: number = 0
                const selectionEnd: number = inputRef.value.length

                this.setState({
                  ...this.state,
                  selectionStart,
                  selectionEnd,
                })
              },
              100,
            )
          }
        },
        placeholder: placeholder ? placeholder : '',
        type: 'text',
      },
    )
  }

  private onEnterHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      const { onEnter } = this.props

      onEnter(evt.currentTarget.value)
    }
  }

  private onChangeHandler = (evt: SyntheticEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    const value = evt.currentTarget.value
    const { inputRef } = this.state

    const selectionStart: number = inputRef ? (inputRef.selectionStart ? inputRef.selectionStart : value.length) : value.length
    const selectionEnd: number = inputRef ? (inputRef.selectionEnd ? inputRef.selectionEnd : value.length) : value.length

    this.setState({
      ...this.state,
      value,
      selectionStart,
      selectionEnd,
    })
    onChange(value)
  }
}

export default TextInput
