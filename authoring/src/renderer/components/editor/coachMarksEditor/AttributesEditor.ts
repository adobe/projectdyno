import { createElement as e, Component } from 'react'
import { AttributeModeKeys, ICoachMark, SelectorModeKeys } from '../../../reducers/editorReducer'
import { IEditorActions } from '../../Editor'
import AttributesGroup, { IAttributeGroupProps } from './AttributesGroup'
import ContentAttributeGroup from './ContentAttributeGroup'
import PlacementAttributesGroup from './PlacementAttributesGroup'
import ProgressAttributeGroup from './ProgressAttributeGroup'

export interface IAttributesEditorProps {
  attributeMode: AttributeModeKeys,
  coachMark: ICoachMark,
  count: number,
  dispatch: IEditorActions,
  index: number,
  selectorMode: SelectorModeKeys,
  // wether or not the coach mark postition has been adjusted
  coachMarkPostionIsAdjusted: boolean,
  // the function that gets called when height changes
  onHeightChange: (id: number, height: number) => void
}

export interface IAttributeGroupEditorProps {
  // coach mark attributes
  coachMark: ICoachMark,
  // the index of a coach mark
  index: number,
  // the number of coach marks in the tour
  count: number,
  // the action dispatcher
  dispatch: IEditorActions,
  // the select tool state
  selectorMode: SelectorModeKeys,
  // wether or not the coach mark postition has been adjusted
  coachMarkPostionIsAdjusted: boolean,
}

class AttributesEditor extends Component<IAttributesEditorProps> {
  render() {
    const {
      attributeMode,
      coachMark,
      count,
      dispatch,
      index,
      selectorMode,
      onHeightChange,
      coachMarkPostionIsAdjusted,
    } = this.props

    return e(
      'div',
      { className: 'attributes-editor' },
      e<IAttributeGroupProps>(
        AttributesGroup,
        {
          isActive: attributeMode === AttributeModeKeys.placement,
          clickAction: () => dispatch.editorSetAttributeMode(AttributeModeKeys.placement),
          title: 'container',
          id: 0,
          onHeightChange,
        },
        e<IAttributeGroupEditorProps>(
          PlacementAttributesGroup,
          {
            coachMark,
            count,
            dispatch,
            index,
            selectorMode,
            coachMarkPostionIsAdjusted,
          }),
      ),
      e<IAttributeGroupProps>(
        AttributesGroup,
        {
          isActive: attributeMode === AttributeModeKeys.content,
          clickAction: () => dispatch.editorSetAttributeMode(AttributeModeKeys.content),
          title: 'content',
          id: 1,
          onHeightChange,
        },
        e<IAttributeGroupEditorProps>(
          ContentAttributeGroup,
          {
            coachMark,
            count,
            dispatch,
            index,
            selectorMode,
            coachMarkPostionIsAdjusted,
          }),
      ),
      e<IAttributeGroupProps>(
        AttributesGroup,
        {
          isActive: attributeMode === AttributeModeKeys.progress,
          clickAction: () => dispatch.editorSetAttributeMode(AttributeModeKeys.progress),
          title: 'progress',
          id: 2,
          onHeightChange,
        },
        e<IAttributeGroupEditorProps>(
          ProgressAttributeGroup,
          {
            coachMark,
            count,
            dispatch,
            index,
            selectorMode,
            coachMarkPostionIsAdjusted,
          }),
      ),
    )
  }
}

export default AttributesEditor
