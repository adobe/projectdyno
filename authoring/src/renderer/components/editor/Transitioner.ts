import { createElement as e, Component } from  'react'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'

export enum TransitionState {
  UNMOUNTED = 'unmounted',
  EXITED = 'exited',
  ENTERING = 'entering',
  ENTERED = 'entered',
  EXITING = 'exiting',
}

export enum AnimationDirection {
  LEFT_TO_RIGHT,
  RIGHT_TO_LEFT,
}

export interface ITransitionerProps {
  isVisible: boolean,
  direction: AnimationDirection,
}

class Transitioner extends Component<ITransitionerProps> {
  render() {
    const { isVisible, children, direction } = this.props

    return e(
      Transition,
      {
        in: isVisible,
        timeout: 300,
        mountOnEnter: true,
        unmountOnExit: true,
      },
      (state: TransitionState) => {
        return e(
          'div',
          {
            className: classNames(
              'wrapper',
              {
                ['entering-left']: state === TransitionState.ENTERING && direction === AnimationDirection.LEFT_TO_RIGHT,
                ['entering-right']: state === TransitionState.ENTERING && direction === AnimationDirection.RIGHT_TO_LEFT,
                ['entered']: state === TransitionState.ENTERED,
                ['exiting-left']: state === TransitionState.EXITING && direction === AnimationDirection.RIGHT_TO_LEFT,
                ['exiting-right']: state === TransitionState.EXITING && direction === AnimationDirection.LEFT_TO_RIGHT,
              }
            )
          },
          children
        )
      }
    )
  }
}

export default Transitioner
