import m from 'mithril'
import {
  SHIM,
  SHIM_HOLE,
  SHIM_HOLE_BORDER_TL,
  SHIM_HOLE_BORDER_TR,
  SHIM_HOLE_BORDER_BL,
  SHIM_HOLE_BORDER_BR,
} from '../CSSSelectors'

const tlCorner = 'M5,0A5,5,0,0,0,0,5V0Z'
const trCorner = 'M5,5A5,5,0,0,0,0,0H5Z'
const blCorner = 'M5,5A5,5,0,0,1,0,0V5Z'
const brCorner = 'M0,5A5,5,0,0,0,5,0V5Z'

const Shim = {
  view: (node) => {
    const {
      coachMark,
    } = node.attrs

    if (!coachMark) {
      return null
    }

    const {
      dimBackground,
      targetPosition,
    } = coachMark

    if (!dimBackground) {
      return null
    }

    return [
      m(
        SHIM,
      ),
      !targetPosition && m(
        SHIM_HOLE,
        m(
          `svg${SHIM_HOLE_BORDER_TL}`,
          {
            width: 5,
            height: 5,
            viewBox: '0 0 5 5',
          },
          m(
            'path',
            {
              d: tlCorner,
            },
          ),
        ),
        m(
          `svg${SHIM_HOLE_BORDER_TR}`,
          {
            width: 5,
            height: 5,
            viewBox: '0 0 5 5',
          },
          m(
            'path',
            {
              d: trCorner,
            },
          ),
        ),
        m(
          `svg${SHIM_HOLE_BORDER_BL}`,
          {
            width: 5,
            height: 5,
            viewBox: '0 0 5 5',
          },
          m(
            'path',
            {
              d: blCorner,
            },
          ),
        ),
        m(
          `svg${SHIM_HOLE_BORDER_BR}`,
          {
            width: 5,
            height: 5,
            viewBox: '0 0 5 5',
          },
          m(
            'path',
            {
              d: brCorner,
            },
          ),
        ),
        m(
          'div',
        ),
      ),
    ]
  },
}

export default Shim
