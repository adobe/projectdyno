import m from 'mithril'
import {
  TINKERBELL,
  TINKERBELL_CIRCLE,
  TINKERBELL_CIRCLE_ANIMATED,
} from '../CSSSelectors'
import validateTargetElement from '../helpers/validateTargetElement'

const TinkerBell = {
  view: (node) => {
    const {
      coachMark,
      infoBoxIsVisible,
      targetElement,
    } = node.attrs
    const {
      progressOnDomEvent,
    } = coachMark

    const isTargetElementValid = validateTargetElement(targetElement)

    if (!infoBoxIsVisible || !isTargetElementValid || !progressOnDomEvent) {
      return null
    }

    return m(
      TINKERBELL,
      m(TINKERBELL_CIRCLE),
      m(`${TINKERBELL_CIRCLE} ${TINKERBELL_CIRCLE_ANIMATED}`),
    )
  },
}

export default TinkerBell
