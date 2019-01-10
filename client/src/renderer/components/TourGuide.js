import m from 'mithril'
import Shim from './Shim'
import InfoBox from './InfoBox'
import TinkerBell from './TinkerBell'

/**
 * The root component for Tour Guide.
 */
const TourGuide = {
  view: (node) => {
    if (!node.attrs.infoBoxIsVisible) {
      return false
    }

    return m('div', [
      m(TinkerBell, node.attrs),
      m(Shim, node.attrs),
      m(InfoBox, node.attrs),
    ])
  },
}

export default TourGuide
