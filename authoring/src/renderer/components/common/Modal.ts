import { createElement as e, Component } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from 'react-transition-group'
import classNames from 'classnames'

import '../../styles/common/modal.scss'
import { TransitionProps } from '../../../../node_modules/@types/react-transition-group/Transition';

export interface IModalProps {
  isVisable: boolean
}

export interface IModalState {
  portalEl: HTMLDivElement,
  modalRoot: HTMLElement,
}

export enum TransitionState {
  UNMOUNTED = 'unmounted',
  EXITED = 'exited',
  ENTERING = 'entering',
  ENTERED = 'entered',
  EXITING = 'exiting',
}

class Modal extends Component<IModalProps, IModalState> {
  state = {
    portalEl: document.createElement('div'),
    modalRoot: document.getElementById('modal-root') as HTMLElement,
  }

  componentWillUnmount() {
    const {
      portalEl,
      modalRoot,
    } = this.state

    if (modalRoot.contains(portalEl)) {
      modalRoot.removeChild(portalEl)
    }
  }

  render() {
    const {
      portalEl,
      modalRoot,
    } = this.state

    return e<TransitionProps>(
      Transition,
      {
        in: this.props.isVisable,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntering: () => {
          portalEl.classList.add('entering')
        },
        onEntered: () => {
          portalEl.classList.remove('entering')
        },
        onExiting: () => {
          portalEl.classList.add('exiting')
        },
        onExited: () => {
          portalEl.classList.remove('exiting')
          modalRoot.removeChild(portalEl)
        },
        timeout: 100,
      },
      (state: TransitionState) => {
        if (
          (state === TransitionState.ENTERING || state === TransitionState.ENTERED) &&
          !modalRoot.contains(portalEl)
        ) {
          portalEl.id = 'modal-container'
          modalRoot.appendChild(portalEl)
        }

        return createPortal(
          e(
            'div',
            {
              className: classNames(
                'modal',
                {
                  ['entering']: state === TransitionState.ENTERING,
                  ['entered']: state === TransitionState.ENTERED,
                  ['exiting']: state === TransitionState.EXITING,
                }
              ),
            },
            this.props.children,
          ),
          portalEl
        )
      }
    )
  }
}

export default Modal
