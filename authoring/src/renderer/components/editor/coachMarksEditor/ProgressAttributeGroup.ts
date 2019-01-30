import { createElement as e, Component } from 'react'
import TextInput, { ITextInputProps } from '../../common/TextInput'
import CheckBox from '../../common/CheckBox'
import { IAttributeGroupEditorProps } from './AttributesEditor'
import ToolButton, { IToolButtonProps } from '../../common/ToolButton'
import { SELECTOR } from '../../../svg/icons'
import { NavButtonTypes, SelectorModeKeys } from '../../../reducers/editorReducer';

interface INewNavButtonValues {
  [index: string]: boolean
}

const getNewNavButtonArray = (
  target: NavButtonTypes,
  values: NavButtonTypes[],
  index: number,
  count: number,
): NavButtonTypes[] => {
  let newValues: INewNavButtonValues = {
    [NavButtonTypes.back]: values.includes(NavButtonTypes.back),
    [NavButtonTypes.next]: values.includes(NavButtonTypes.next),
  }
  let returnValues: NavButtonTypes[] = []

  // toggle the target value
  newValues[target] = !newValues[target]

  // make sure back is not in the array if this is the first coach mark
  if (index === 0) {
    newValues.back = false
  }

  // make sure next is not in the array if this is the last coach mark
  if ((index + 1) === count) {
    newValues.next = false
  }

  // build the return array
  if (newValues.back) {
    returnValues.push(NavButtonTypes.back)
  }

  if (newValues.next) {
    returnValues.push(NavButtonTypes.next)
  }

  return returnValues
}

class ProgressAttributeGroup extends Component<IAttributeGroupEditorProps> {
  render() {
    const {
      coachMark,
      count,
      dispatch,
      index,
      selectorMode,
    } = this.props
    const {
      progressOnDomEvent,
      navButtons,
    } = coachMark
    const selectProps: IToolButtonProps = {
      isEnabled: true,
      isActive: selectorMode === SelectorModeKeys.PROGRESS,
      icon: SELECTOR,
      height: 18,
      onClickAction: () => {
        if (selectorMode === SelectorModeKeys.PROGRESS) {
          dispatch.editorStopSelector()
        } else {
          dispatch.editorStartSelector(SelectorModeKeys.PROGRESS)
        }
      },
    }
    const handleSelectorEdit = (value: string) => {
      const event: string = 'click'

      dispatch.editorModifyCoachMarkAttributes({
        progressOnDomEvent: {
          event,
          targetSelector: value,
        }
      })
    }

    return e(
      'div',
      null,
      e(
        'div',
        { className: 'row' },
        e(
          'div',
          {
            className: 'label-left',
          },
          'Buttons',
        ),
        e(
          CheckBox,
          {
            isEnabled: index !== 0,
            label: 'Back',
            onClick: () => dispatch.editorModifyCoachMarkAttributes({
              navButtons: getNewNavButtonArray(
                NavButtonTypes.back,
                navButtons,
                index,
                count
              ),
            }),
            value: navButtons.includes(NavButtonTypes.back),
          },
        ),
        e(
          CheckBox,
          {
            isEnabled: (index + 1) !== count,
            label: 'Next',
            onClick: () => dispatch.editorModifyCoachMarkAttributes({
              navButtons: getNewNavButtonArray(
                NavButtonTypes.next,
                navButtons,
                index,
                count
              ),
            }),
            value: navButtons.includes(NavButtonTypes.next),
          },
        )
      ),
      e(
        'div',
        { className: 'row' },
        e(
          'div',
          { className: 'label-left' },
          'Trigger',
        ),
        e<IToolButtonProps>(ToolButton, selectProps),
        e<ITextInputProps>(
          TextInput,
          {
            value: progressOnDomEvent ? progressOnDomEvent.targetSelector : '',
            placeholder: 'Optional',
            onEnter: handleSelectorEdit,
            onChange: handleSelectorEdit,
          }
        )
      ),
    )
  }
}

export default ProgressAttributeGroup
