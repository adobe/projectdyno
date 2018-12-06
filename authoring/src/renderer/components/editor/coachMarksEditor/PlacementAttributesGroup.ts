import { createElement as e, SFC } from 'react'
import TextInput, { ITextInputProps } from '../../common/TextInput'
import ToolButton, { IToolButtonProps } from '../../common/ToolButton'
// import ToolTip from '../../common/ToolTip'
import Toggle, { IToggleProps } from '../../common/Toggle'
import {
  ARROW_CENTER,
  ARROW_END,
  ARROW_START,
  PLACEMENT_BOTTOM,
  PLACEMENT_LEFT,
  PLACEMENT_RIGHT,
  PLACEMENT_TOP,
  SELECTOR,
} from '../../../svg/icons'
import { IAttributeGroupEditorProps } from './AttributesEditor'
import { AlignTypes, AnchorPositionTypes, SelectorModeKeys } from '../../../reducers/editorReducer'

const PlacementAttributesGroup: SFC<IAttributeGroupEditorProps> = ({
  coachMark,
  coachMarkPostionIsAdjusted,
  dispatch,
  selectorMode,
}) => {
  const {
    align,
    anchorPosition,
    dimBackground,
    targetSelector,
  } = coachMark
  const selectProps: IToolButtonProps = {
    isEnabled: true,
    isActive: selectorMode === SelectorModeKeys.PLACEMENT,
    icon: SELECTOR,
    height: 18,
    onClickAction: () => {
      if (selectorMode === SelectorModeKeys.PLACEMENT) {
        dispatch.editorStopSelector()
      } else {
        dispatch.editorStartSelector(SelectorModeKeys.PLACEMENT)
      }
    },
  }
  const startArrowProps: IToolButtonProps = {
    isEnabled: true,
    isActive: align == AlignTypes.start,
    icon: ARROW_START,
    height: 18,
    onClickAction: () => {
      dispatch.editorModifyCoachMarkAttributes({
        align: AlignTypes.start,
      })
    },
  }
  const centerArrowProps: IToolButtonProps = {
    isEnabled: true,
    isActive: align == AlignTypes.center,
    icon: ARROW_CENTER,
    height: 18,
    onClickAction: () => {
      dispatch.editorModifyCoachMarkAttributes({
        align: AlignTypes.center,
      })
    },
  }
  const endArrowProps: IToolButtonProps = {
    isEnabled: true,
    isActive: align == AlignTypes.end,
    icon: ARROW_END,
    height: 18,
    onClickAction: () => {
      dispatch.editorModifyCoachMarkAttributes({
        align: AlignTypes.end,
      })
    },
  }
  const placementBottom: IToolButtonProps = {
    isEnabled: true,
    isActive: anchorPosition === AnchorPositionTypes.bottom,
    icon: PLACEMENT_BOTTOM,
    height: 18,
    onClickAction: () => {
      dispatch.editorModifyCoachMarkAttributes({
        anchorPosition: AnchorPositionTypes.bottom,
      })
    },
  }
  const placementLeft: IToolButtonProps = {
    isEnabled: true,
    isActive: anchorPosition === AnchorPositionTypes.left,
    icon: PLACEMENT_LEFT,
    height: 18,
    onClickAction: () => {
      dispatch.editorModifyCoachMarkAttributes({
        anchorPosition: AnchorPositionTypes.left,
      })
    },
  }
  const placementRight: IToolButtonProps = {
    isEnabled: true,
    isActive: anchorPosition === AnchorPositionTypes.right,
    icon: PLACEMENT_RIGHT,
    height: 18,
    onClickAction: () => {
      dispatch.editorModifyCoachMarkAttributes({
        anchorPosition: AnchorPositionTypes.right,
      })
    },
  }
  const placementTop: IToolButtonProps = {
    isEnabled: true,
    isActive: anchorPosition === AnchorPositionTypes.top,
    icon: PLACEMENT_TOP,
    height: 18,
    onClickAction: () => {
      dispatch.editorModifyCoachMarkAttributes({
        anchorPosition: AnchorPositionTypes.top,
      })
    },
  }
  const toggleDimProps: IToggleProps = {
    isEnabled: true,
    label: '',
    value: dimBackground ? dimBackground : false,
    onClickAction: (value: boolean) => {
      dispatch.editorModifyCoachMarkAttributes({
        dimBackground: value,
      })
    }
  }
  const handleSelectorEdit = (value: string) => {
    dispatch.editorModifyCoachMarkAttributes({
      targetSelector: value,
    })
  }

  return e(
    'div',
    null,
    e(
      'div',
      { className: 'row' },
      e('div', { className: 'label-left' }, 'Attach'),
      e<IToolButtonProps>(ToolButton, selectProps),
      e<ITextInputProps>(TextInput, {
        placeholder: 'Enter selector',
        value: targetSelector,
        onEnter: handleSelectorEdit,
        onChange: handleSelectorEdit,
      }),
    ),
    e(
      'div',
      { className: 'row' },
      e('div', { className: 'label-left' }, 'Position'),
      e<IToolButtonProps>(ToolButton, placementTop),
      e<IToolButtonProps>(ToolButton, placementRight),
      e<IToolButtonProps>(ToolButton, placementBottom),
      e<IToolButtonProps>(ToolButton, placementLeft),
      // coachMarkPostionIsAdjusted && e(ToolTip, null, 'Coach Mark Repositioned')
    ),
    e(
      'div',
      { className: 'row' },
      e('div', { className: 'label-left' }, 'Arrow'),
      e<IToolButtonProps>(ToolButton, startArrowProps),
      e<IToolButtonProps>(ToolButton, centerArrowProps),
      e<IToolButtonProps>(ToolButton, endArrowProps),
    ),
    e(
      'div',
      { className: 'row' },
      e('div', { className: 'label-left' }, 'Dim'),
      e(
        'div',
        {
          style: {
            paddingLeft: 6,
            height: 18,
          }
        },
        e<IToggleProps>(Toggle, toggleDimProps)
      )
    )
  )
}

export default PlacementAttributesGroup
