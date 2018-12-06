import { Attributes, createElement as e, Component } from 'react'
import {
  Editor,
  EditorState,
  CompositeDecorator,
  ContentBlock,
  ContentState,
  RichUtils,
  convertFromHTML,
  SelectionState,
} from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import ToolButtonLite, { IToolButtonProps } from './ToolButtonLite'
import './Modal'
import './Modal'
import { BOLD, ITALIC, LINK, UNLINK, ORDERED_LIST, UNORDERED_LIST } from '../../svg/icons'
import '../../styles/Draft.css'
import CreateLinkModal from './textEditor/CreateLinkModal'
import contentCharacterLength from './textEditor/helpers/contentCharacterLength'

export interface ITextEditorProps extends Attributes {
  /** A function that gets called when changed are made in the editor. */
  onChange: (html: string) => any
  /** The value of the editor.  See notes on how this is computed.. */ // TODO describe how the value string is converted to HTML.
  value: string
}

export interface ITextEditorState {
  editorState: EditorState
  showLinkModal: boolean
  url: string
}

function findLinkEntities(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback
  )
}

const Link = (props: any) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();

  return e(
    'a',
    {
      href: url,
    },
    props.children
  )
}

const linkDecorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  }
])

class TextEditor extends Component<ITextEditorProps, ITextEditorState> {

  state: ITextEditorState = {
    editorState: EditorState.createEmpty(linkDecorator),
    showLinkModal: false,
    url: '',
  }

  editorRef: Editor | null = null

  handlePropsToState = () => {
    const { value } = this.props
    let editorState: EditorState

    if (!value || contentCharacterLength(value) === 0) {
      editorState = EditorState.createEmpty(linkDecorator)
    } else {
      const htmlBlocks = convertFromHTML(value)
      const contentState = ContentState.createFromBlockArray(
        htmlBlocks.contentBlocks,
        htmlBlocks.entityMap,
      )

      editorState = EditorState.createWithContent(contentState, linkDecorator)
    }

    this.setState({
      ...this.state,
      editorState,
    })
  }

  handleChange = (editorState: EditorState) => {
    const selection = editorState.getSelection()
    const content = editorState.getCurrentContent()
    const selectedBlock = content.getBlockForKey(selection.getStartKey())
    const selectedEntity = selectedBlock.getEntityAt(selection.getStartOffset())
    let url: string = ''

    if (selectedEntity) {
      const entityData = content.getEntity(selectedEntity).getData()
      const entityUrl = entityData.url

      url = entityUrl ? entityUrl : ''
    } else {
      url = ''
    }

    this.setState({
      ...this.state,
      editorState,
      url,
    })

    const html = stateToHTML(content)

    this.props.onChange(html)
  }

  handleFocus = () => {
    if (this.editorRef) {
      this.editorRef.focus()
    }
  }

  toggleLinkModal = () => {
    const { showLinkModal } = this.state

    this.setState({
      ...this.state,
      showLinkModal: !showLinkModal
    })
  }

  createLink = (url: string, selectionState: SelectionState | null) => {
    const { editorState } = this.state
    const linkSelection = selectionState ? selectionState : this.state.editorState.getSelection()
    const contentState = editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      {
        url,
        target: '_blank',
      }
    )
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

    this.handleChange(
      RichUtils.toggleLink(
        editorState,
        linkSelection,
        entityKey
      )
    )
    setTimeout(() => this.handlePropsToState(), 0)
  }

  componentDidMount() {
    this.handlePropsToState()
  }

  render() {
    const { editorState, showLinkModal, url } = this.state
    const inlineStyle = editorState.getCurrentInlineStyle()
    const selection = editorState.getSelection()
    const selectedBlock = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
    const blockType = selectedBlock.getType()

    const boldButtonProps: IToolButtonProps = {
      isActive: inlineStyle.contains('BOLD'),
      isEnabled: true,
      icon: BOLD,
      onMouseDownAction: (e) => {
        e.preventDefault()

        this.handleChange(
          RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD')
        )
      }
    }

    const italicButtonProps: IToolButtonProps = {
      isActive: inlineStyle.contains('ITALIC'),
      isEnabled: true,
      icon: ITALIC,
      onMouseDownAction: (e) => {
        e.preventDefault()

        this.handleChange(
          RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC')
        )
      },
    }

    const orderedListButtonProps: IToolButtonProps = {
      isActive: blockType === 'ordered-list-item',
      isEnabled: true,
      icon: ORDERED_LIST,
      onMouseDownAction: (e) => {
        e.preventDefault()

        this.handleChange(
          RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item')
        )
      },
    }

    const unorderedListButtonProps: IToolButtonProps = {
      isActive: blockType === 'unordered-list-item',
      isEnabled: true,
      icon: UNORDERED_LIST,
      onMouseDownAction: (e) => {
        e.preventDefault()

        this.handleChange(
          RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item')
        )
      },
    }

    const linkButtonProps: IToolButtonProps = {
      isActive: false,
      isEnabled: true,
      icon: LINK,
      onMouseDownAction: (e) => {
        e.preventDefault()
        this.toggleLinkModal()
      }
    }

    const unlinkButtonProps: IToolButtonProps = {
      isActive: false,
      isEnabled: true,
      icon: UNLINK,
      onMouseDownAction: (e) => {
        e.preventDefault()

        const { editorState } = this.state
        const selectionState = editorState.getSelection()

        this.handleChange(
          RichUtils.toggleLink(
            editorState,
            selectionState,
            null
          )
        )
      }
    }

    return e(
      'div',
      {
        style: {
          height: 200,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '3px 12px 5px 12px',
          border: '1px solid #E1E1E1',
          borderRadius: '4px',
        }
      },
      e(
        'div',
        {
          onClick: () => this.handleFocus(),
          style: {
            width: '100%',
            marginTop: 8,
            flex: '1 1 auto',
            overflow: 'scroll',
          }
        },
        e(
          Editor,
          {
            editorState: this.state.editorState,
            onChange: this.handleChange,
            ref: (ref) => {
              this.editorRef = ref
            }
          }
        )
      ),
      e(
        'div',
        {
          style: {
            display: 'flex',
            flex: '0 0 auto',
          }
        },
        e<IToolButtonProps>(
          ToolButtonLite,
          boldButtonProps,
        ),
        e<IToolButtonProps>(
          ToolButtonLite,
          italicButtonProps,
        ),
        e<IToolButtonProps>(
          ToolButtonLite,
          orderedListButtonProps,
        ),
        e<IToolButtonProps>(
          ToolButtonLite,
          unorderedListButtonProps,
        ),
        e<IToolButtonProps>(
          ToolButtonLite,
          linkButtonProps,
        ),
        e<IToolButtonProps>(
          ToolButtonLite,
          unlinkButtonProps,
        ),
      ),
      e(
        CreateLinkModal,
        {
          url,
          isVisable: showLinkModal,
          onToggleVisable: this.toggleLinkModal,
          onCreate: this.createLink,
          selection
        }
      )
    )
  }
}

export default TextEditor
