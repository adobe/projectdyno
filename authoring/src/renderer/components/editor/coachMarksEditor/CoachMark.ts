import { Attributes, createElement as e, Component } from 'react'
import { AttributeModeKeys, ICoachMark, SelectorModeKeys } from '../../../reducers/editorReducer'
import { GRABBER, TRASH } from '../../../svg/icons'
import ToolButton, { IToolButtonProps } from '../../common/ToolButton'
import { IEditorActions } from '../../Editor'
import AttributesEditor, { IAttributesEditorProps } from './AttributesEditor'
import DeleteCoachMarkModal, { IDeleteCoachMarkModalProps } from './DeleteCoachMarkModal'

import '../../../styles/editor/coachMarksEditor/coachMark.scss'

export interface ICoachMarkProps extends Attributes {
  // the currently selected attribute group
  attributeMode: AttributeModeKeys,
  // coach mark attributes
  coachMark: ICoachMark,
  // the number of coach marks in the tour
  count: number,
  // the action dispatcher
  dispatch: IEditorActions,
  // index of the coach mark
  index: number,
  // wether or not the coach is the current coach mark
  isActive: boolean,
  // state of the selector tool
  selectorMode: SelectorModeKeys,
  // wether or not the coach mark postition has been adjusted
  coachMarkPostionIsAdjusted: boolean,
}

export interface ICoachMarkState {
  isDeleteModalVisable: boolean,
  attributesEditorHeight: number,
  attributeGroupHeights: number[],
}

const attributesEditorHeight = (mode: AttributeModeKeys) => {
  switch (mode) {
    case AttributeModeKeys.placement: {
      return 262
    }
    case AttributeModeKeys.content: {
      return 330
    }
    case AttributeModeKeys.progress: {
      return 252
    }
  }
}

class CoachMark extends Component<ICoachMarkProps, ICoachMarkState> {
  state: ICoachMarkState = {
    isDeleteModalVisable: false,
    attributesEditorHeight: 0,
    attributeGroupHeights: [],
  }

  attributesEditorRef: HTMLElement | null = null

  toggleDeleteModal = () => {
    this.setState({
      ...this.state,
      isDeleteModalVisable: !this.state.isDeleteModalVisable,
    })
  }

  onHeightChange = (id: number, height: number) => {
    const { attributeGroupHeights } = this.state
    const newAttributeGroupHeights = [...attributeGroupHeights]

    newAttributeGroupHeights[id] = height

    const attributesEditorHeight = newAttributeGroupHeights.reduce(
      (total, item) => item ? total + item : total,
      0,
    )

    this.setState({
      ...this.state,
      attributeGroupHeights: newAttributeGroupHeights,
      attributesEditorHeight,
    })
  }

  componentDidUpdate() {
    const { attributesEditorRef } = this

    if (attributesEditorRef) {
      const height = attributesEditorRef.offsetHeight

      if (height !== this.state.attributesEditorHeight) {
        this.setState({
          ...this.state,
          attributesEditorHeight: height,
        })
      }
    }
  }

  render() {
    const {
      attributeMode,
      coachMark,
      coachMarkPostionIsAdjusted,
      count,
      dispatch,
      index,
      isActive,
      selectorMode,
    } = this.props
    const {
      attributesEditorHeight,
      isDeleteModalVisable,
    } = this.state
    const grabberProps: IToolButtonProps = {
      icon: GRABBER,
      isEnabled: true,
      width: 22,
      iconWidth: 8,
      onClickAction: () => null,
    }
    const trashProps: IToolButtonProps = {
      icon: TRASH,
      isEnabled: true,
      onClickAction: () => this.toggleDeleteModal()
    }
    const attributesEditorProps: IAttributesEditorProps = {
      attributeMode,
      coachMarkPostionIsAdjusted,
      count,
      coachMark,
      dispatch,
      index,
      selectorMode,
      onHeightChange: this.onHeightChange
    }
    const deleteModalProps: IDeleteCoachMarkModalProps = {
      coachMarkIndex: index,
      dispatch,
      isVisable: isDeleteModalVisable,
      toggle: this.toggleDeleteModal,
    }
    const {
      description,
    } = coachMark

    return e(
      'div',
      {
        className: `coachMark ${isActive ? 'active' : ''}`,
        onClick: () => {
          if (!isActive) dispatch.editorSetActiveCoachMarkIndex(index)
        }
      },
      e(
        'div',
        { className: 'titlebar' },
        e<IToolButtonProps>(ToolButton, grabberProps),
        e('div', { className: 'title' }, `Step ${index + 1}`),
        isActive ? e<IToolButtonProps>(ToolButton, trashProps) : null,
      ),
      e(
        'div',
        {
          className: `attributes-container ${isActive ? 'active' : ''}`,
          ref: ref => this.attributesEditorRef = ref,
        },
        isActive && e<IAttributesEditorProps>(AttributesEditor, attributesEditorProps),
      ),
      e(
        DeleteCoachMarkModal,
        deleteModalProps,
      )
    )
  }
}

export default CoachMark
