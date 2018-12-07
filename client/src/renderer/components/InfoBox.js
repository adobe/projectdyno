import m from 'mithril'
import {
  INFOBOX_ARROW,
  INFOBOX_CARD,
  INFOBOX_DESCRIPTION,
  INFOBOX_DESCRIPTION_WRAPPER,
  INFOBOX_FOOTER,
  INFOBOX_IMAGE,
  INFOBOX_IMAGE_WRAPPER,
  INFOBOX_MAIN,
  INFOBOX_WRAPPER,
  BLUE_THEME_WRAPPER,
} from '../CSSSelectors'
import ActionButton from './ActionButton'
import NavigationButtons from './NavigationButtons'
import validateTargetElement from '../helpers/validateTargetElement'
import { CLOSE_BUTTON } from '../../svg/data'
import { BLUE_THEME } from '../themeTypes'

const InfoBox = {
  view: (node) => {
    const {
      coachMark,
      coachMarkCount,
      currentCoachMarkIndex,
      infoBoxIsVisible,
      targetElement,
      actions,
      theme,
    } = node.attrs
    const {
      description,
      media,
      navButtons,
      targetPosition,
    } = coachMark
    const {
      hideTourGuide,
    } = actions
    const isTargetElementValid = validateTargetElement(targetElement)
    const rootClass = theme === BLUE_THEME ? `${INFOBOX_WRAPPER} ${BLUE_THEME_WRAPPER}` : INFOBOX_WRAPPER

    if (!infoBoxIsVisible || !isTargetElementValid) {
      return null
    }

    return m(rootClass, [
      m(INFOBOX_CARD, [
        media && !media.error && media.src !== '' && m(
          INFOBOX_IMAGE_WRAPPER,
          m(
            `img${INFOBOX_IMAGE}`,
            {
              src: media.src,
            },
          ),
        ),
        m(INFOBOX_MAIN, [
          m(
            INFOBOX_DESCRIPTION_WRAPPER,
            m(INFOBOX_DESCRIPTION, m.trust(description)),
            m(
              ActionButton,
              {
                data: CLOSE_BUTTON,
                onclick: hideTourGuide,
              },
            ),
          ),
          m(INFOBOX_FOOTER, [
            m(
              NavigationButtons,
              {
                navButtons,
                actions,
                currentCoachMarkIndex,
                coachMarkCount,
              },
            ),
          ]),
        ]),
      ]),
      // don't render the arrow if using the "targetPosition" property.
      targetPosition ? null : m(INFOBOX_ARROW),
    ])
  },
}

export default InfoBox
