import m from 'mithril'
import { INFOBOX_ACTION_BUTTON } from '../CSSSelectors'

const ActionButton = {
  view: (node) => {
    const { data, onclick } = node.attrs

    return m(
      `button.${INFOBOX_ACTION_BUTTON}`,
      m(
        'svg',
        {
          width: 12,
          height: 12,
          viewBox: '0 0 12 12',
          onclick,
        },
        m('path', {
          d: data,
        }),
      ),
    )
  },
}

export default ActionButton
