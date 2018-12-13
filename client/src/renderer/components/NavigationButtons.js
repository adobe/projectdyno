import m from 'mithril'
import { INFOBOX_BUTTON_PRIMARY, INFOBOX_BUTTON_SECONDARY, INFOBOX_COUNTER } from '../CSSSelectors'

const NavigationButtons = {
  view: (node) => {
    const {
      actions,
      coachMarkCount,
      currentCoachMarkIndex,
      navButtons,
    } = node.attrs
    const {
      nextCoachMark,
      prevCoachMark,
      tourFinished,
    } = actions
    const isFirst = currentCoachMarkIndex === 0
    const isLast = (currentCoachMarkIndex + 1) === coachMarkCount
    const onlyOne = coachMarkCount === 1
    const noNav = onlyOne || navButtons.length === 0
    const renderedButtons = []

    if (!onlyOne) {
      renderedButtons.push(m(
        INFOBOX_COUNTER,
        `${currentCoachMarkIndex + 1} of ${coachMarkCount}`,
      ))
    }

    if (!noNav) {
      if (!isFirst) {
        renderedButtons.push(m(
          `button.${INFOBOX_BUTTON_SECONDARY}`,
          {
            onclick: prevCoachMark,
          },
          'Back',
        ))
      }

      if (!isLast) {
        renderedButtons.push(m(
          `button.${INFOBOX_BUTTON_PRIMARY}`,
          {
            onclick: nextCoachMark,
          },
          'Next',
        ))
      }
    }

    if (isLast) {
      renderedButtons.push(m(
        `button.${INFOBOX_BUTTON_PRIMARY}`,
        {
          onclick: tourFinished,
        },
        onlyOne ? 'Ok' : 'Done',
      ))
    }

    return renderedButtons
  },
}

export default NavigationButtons
