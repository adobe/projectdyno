import { createElement as e, Component } from 'react'
import { AttributeModeKeys, EditorModeKeys, ITour } from '../../reducers/editorReducer'
import { BACK } from '../../svg/icons'
import ToolButton, { IToolButtonProps } from '../common/ToolButton'
import { IValidatedEditorProps } from '../Editor'
import CoachMark, { ICoachMarkProps } from './coachMarksEditor/CoachMark'
import AddStep, { IAddStepProps } from './coachMarksEditor/AddStep'

export interface ICoachMarksEditorProps {
  currentCoachMarkIndex: number,
  tour: ITour,
  onEditorSetAttributeMode: (attributeMode: AttributeModeKeys) => void,
  onEditorSetMode: (editMode: EditorModeKeys) => void,
}

class CoachMarksEditor extends Component<IValidatedEditorProps> {
  render () {
    const {
      attributeMode,
      currentTour,
      dispatch,
      selectorMode,
      tourGuideState,
    } = this.props
    const currentCoachMarkIndex = tourGuideState ? tourGuideState.currentCoachMarkIndex : 0
    const { coachMarkPostionIsAdjusted } = tourGuideState
    const coachMarks = currentTour ? currentTour.coachMarks : []
    const backButtonProps: IToolButtonProps = {
      icon: BACK,
      isEnabled: true,
      onClickAction: () => dispatch.editorSetMode(EditorModeKeys.tours),
    }
    const addStepProps: IAddStepProps = {
      onClickAction: () => dispatch.editorAddCoachMark(),
    }
    const count = coachMarks.length
    const title = currentTour ? currentTour.title : ''

    return e(
      'div',
      {
        style: {
          display: 'flex',
          height: '100%',
          flexDirection: 'column'
        }
      },
      e('div',
        {
          className: 'header',
          style: {
            marginLeft: -12,
          },
        },
        e(
          ToolButton,
          backButtonProps
        ),
        e(
          'div',
          {
            className: 'title'
          },
          title
        ),
      ),
      e(
        'div',
        {
          className: 'list',
        },
        coachMarks.map((coachMark, index) => {
          const coachMarkProps: ICoachMarkProps = {
            attributeMode,
            coachMark,
            count,
            dispatch,
            index,
            isActive: index === currentCoachMarkIndex,
            key: index,
            selectorMode,
            coachMarkPostionIsAdjusted
          }

          return e<ICoachMarkProps>(CoachMark, coachMarkProps)
        }),
        e(AddStep, addStepProps),
      ),
    )
  }
}

export default CoachMarksEditor
