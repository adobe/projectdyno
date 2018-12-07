import { createElement as e, Component } from 'react'
import { IEditorProps } from '../Editor'
import Tour, { ITourProps } from './toursEditor/Tour'
import CreateTourModal, { ICreateTourModalProps } from './toursEditor/CreateTourModal'

interface IToursEditorState {
  isCreateModalVisable: boolean,
}

class ToursEditor extends Component<IEditorProps, IToursEditorState> {
  state = {
    isCreateModalVisable: false,
  }

  constructor(props: IEditorProps) {
    super(props)

    this.toggleCreateModal = this.toggleCreateModal.bind(this)
  }

  toggleCreateModal() {
    this.setState({
      ...this.state,
      isCreateModalVisable: !this.state.isCreateModalVisable,
    })
  }

  render() {
    const { dispatch, tourGuideState } = this.props
    const tours = tourGuideState ? tourGuideState.tours : []
    const createModalProps: ICreateTourModalProps = {
      isVisable: this.state.isCreateModalVisable,
      onToggleVisable: this.toggleCreateModal,
      tutorialName: '',
      dispatch,
    }

    return e(
      'div',
      null,
      e(
        'div',
        {
          className: 'header',
        },
        e(
          'div',
          {
            style: {
              flex: '1 0 auto',
            },
          },
          `${tours.length} Experiences`,
        ),
        e(
          'button',
          {
            className: 'spectrum-Button spectrum-Button--cta',
            onClick: () => this.toggleCreateModal(),
          },
          'Create',
        )
      ),
      tours.map((tour, index) => {
        const tourProps: ITourProps = {
          dispatch,
          index,
          key: index,
          title: tour.title,
        }

        return e(Tour, tourProps)
      }),
      e<ICreateTourModalProps>(
        CreateTourModal,
        createModalProps,
      )
    )
  }
}

export default ToursEditor
