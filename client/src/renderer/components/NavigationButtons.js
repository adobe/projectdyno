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

    // const isFirst = currentCoachMarkIndex === 0
    const isLast = (currentCoachMarkIndex + 1) === coachMarkCount
    // const noNav = onlyOne || navButtons.length === 0

    const onlyOne = coachMarkCount === 1
    const renderedButtons = []
    const hasBack = navButtons.find(button => button === 'back')
    const hasNext = navButtons.find(button => button === 'next')

    if (!onlyOne) {
      renderedButtons.push(m(
        INFOBOX_COUNTER,
        `${currentCoachMarkIndex + 1} of ${coachMarkCount}`,
      ))
    }

    if (hasBack) {
      renderedButtons.push(m(
        `button.${(hasNext || isLast) ? INFOBOX_BUTTON_SECONDARY : INFOBOX_BUTTON_PRIMARY}`,
        {
          onclick: prevCoachMark,
        },
        'Back',
      ))
    }

    if (hasNext && !isLast) {
      renderedButtons.push(m(
        `button.${INFOBOX_BUTTON_PRIMARY}`,
        {
          onclick: nextCoachMark,
        },
        'Next',
      ))
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

    /*
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
    */

    return renderedButtons
  },
}

export default NavigationButtons
