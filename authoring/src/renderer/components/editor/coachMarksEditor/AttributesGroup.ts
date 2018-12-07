import { Attributes, createElement as e, Component } from 'react'
import AccordianChevron from '../../common/AccordianChevron'
import classNames from 'classnames'

export interface IAttributeGroupProps extends Attributes {
  clickAction: () => void,
  isActive: boolean,
  title: string,
  // the function that gets called when height changes
  onHeightChange: (id: number, height: number) => void,
  id: number,
}

export interface IAttributeGroupState {
  renderedHeight: number,
  hasMounted: boolean,
}

class AttributeGroup extends Component<IAttributeGroupProps, IAttributeGroupState> {

  state: IAttributeGroupState = {
    renderedHeight: 0,
    hasMounted: false,
  }
  childContainerRef: HTMLElement | null = null
  timeOutInterval: any

  componentDidUpdate() {
    const { childContainerRef: ref } = this
    const renderedHeight: number = ref ? ref.offsetHeight : 0

    if (renderedHeight !== this.state.renderedHeight) {
      this.props.onHeightChange(0, renderedHeight)
      this.setState({
        ...this.state,
        renderedHeight,
      })
    }
  }

  componentDidMount() {
    // set hasMounted to true after 300ms
    // this is so that attribute groups done't animate right after they have mounted
    this.timeOutInterval = setTimeout(
      () => {
        this.setState({
          ...this.state,
          hasMounted: true,
        })
      },
      300
    )
  }

  componentWillUnmount() {
    clearInterval(this.timeOutInterval)
  }

  render() {
    const {
      children,
      clickAction,
      isActive,
      title,
    } = this.props
    const {
      hasMounted
    } = this.state

    return e(
      'div',
      {
        className: 'attributes-group-container',
      },
      e(
        'button',
        {
          className: 'title',
          onClick: () => clickAction(),
        },
        e(AccordianChevron, { isActive }),
        title,
      ),
      e(
        'div',
        {
          className: classNames(
            'attributes-group',
            {
              ['has-mounted']: hasMounted,
            }
          ),
          style: {
            flex: `0 0 ${this.state.renderedHeight}px`
          }
        },
        e(
          'div',
          {
            className: 'child-container',
            ref: ref => this.childContainerRef = ref,
          },
          isActive && children,
        )
      )
    )
  }
}

export default AttributeGroup
