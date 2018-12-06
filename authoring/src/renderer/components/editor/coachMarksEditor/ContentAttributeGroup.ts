import { createElement as e, Component } from 'react'
import '../../common/TextInput'
import TextInput, { ITextInputProps } from '../../common/TextInput';
import TextEditor, { ITextEditorProps } from '../../common/TextEditor'
import { IAttributeGroupEditorProps } from './AttributesEditor';
import contentCharacterLength from '../../common/textEditor/helpers/contentCharacterLength'

class ContentAttributeGroup extends Component<IAttributeGroupEditorProps> {
  render() {
    const {
      coachMark,
      dispatch,
    } = this.props
    const {
      media,
      title,
      description,
    } = coachMark
    const handleTitleEdit = (value: string) => dispatch.editorModifyCoachMarkAttributes({
      title: value,
    })
    const handleDescriptionEdit = (value: string) => dispatch.editorModifyCoachMarkAttributes({
      description: value,
    })
    const handleMediaEdit = (value: string) => dispatch.editorModifyCoachMarkAttributes({
      media: {
        src: value,
        width: 0,
        height: 0,
      }
    })

    return e(
      'div',
      null,
      e(
        'div',
        { className: 'row' },
        e(
          'div',
          { className: 'label-left' },
          'Image URL'
        ),
        e<ITextInputProps>(
          TextInput,
          {
            value: media ? media.src : '',
            placeholder: 'Optional',
            onEnter: handleMediaEdit,
            onChange: handleMediaEdit,
          }
        )
      ),
      /*
      e(
        'div',
        { className: 'row label-margin' },
        e(
          'div',
          { className: 'label-left' },
          'Title',
        ),
        e(
          'div',
          { className: 'label-right' },
          title.length,
        )
      ),
      e(
        'div',
        { className: 'row' },
        e<ITextInputProps>(
          TextInput,
          {
            value: title,
            placeholder: 'Type here',
            onEnter: handleTitleEdit,
            onChange: handleTitleEdit,
          }
        )
      ),
      */
      e(
        'div',
        { className: 'row label-margin' },
        e(
          'div',
          { className: 'label-left' },
          'Description',
        ),
        e(
          'div',
          { className: 'label-right' },
          // remove html tags before calculating length
          contentCharacterLength(description),
        )
      ),
      e(
        'div',
        { className: 'row' },
        e<ITextEditorProps>(
          TextEditor,
          {
            onChange: handleDescriptionEdit,
            value: description,
          }
        ),
      )
    )
  }
}

export default ContentAttributeGroup
