import {
  BLUE,
  TEXT,
  TEXT_BLUE,
  // ORANGE,
  INFOBOX_BORDER_RADIUS,
  INFOBOX_MARGIN,
  INFOBOX_WIDTH,
  TINKERBELL_SIZE,
} from './CSSConfig'

import {
  INFOBOX_BUTTON_PRIMARY,
  INFOBOX_BUTTON_SECONDARY,
  INFOBOX_CARD,
  INFOBOX_DESCRIPTION,
  INFOBOX_DESCRIPTION_WRAPPER,
  INFOBOX_FOOTER,
  INFOBOX_IMAGE,
  INFOBOX_MAIN,
  INFOBOX_CLOSE_BUTTON,
  INFOBOX_CLOSE_BUTTON_ACTIVE,
  INFOBOX_COUNTER,
  TINKERBELL_CIRCLE,
  TINKERBELL_CIRCLE_ANIMATED,
  BLUE_THEME_WRAPPER,
} from './CSSSelectors'

const InfoBoxStaticStyles = {
  view: () => `
    ${INFOBOX_CARD} {
      font-family: Adobe Clean, Arial, Helvetica;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      color: ${TEXT};
      width: ${INFOBOX_WIDTH}px ;
      overflow: visible;
      transform: none;
      text-transform: none;
      text-align: none;
      text-decoration: none;
      border-radius: ${INFOBOX_BORDER_RADIUS}px;
      background: white;
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_CARD} {
      background: ${BLUE};
      color: ${TEXT_BLUE};
    }

    ${INFOBOX_CARD} button {
      outline: none;
      cursor: pointer;
      font-weight: bold;
    }

    ${INFOBOX_CLOSE_BUTTON_ACTIVE} {
      background: white;
    }

    ${INFOBOX_CLOSE_BUTTON}:hover {
      background: white;
    }

    ${INFOBOX_CARD} button {
      text-decoration: none;
      text-transform: none;
      background: unset;
    }

    ${INFOBOX_BUTTON_PRIMARY} {
      border-width: 2px;
      border-style: solid;
      border-radius: 16px;
      border-color: ${TEXT};
      color: ${TEXT};
      height: 32px;
      padding: 0 14px;
      font-family: inherit;
      font-size: 15px;c
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;
      outline: none !important;
      transition: background 125ms ease-out,
          border-color 125ms ease-out,
          color 125ms ease-out;
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_BUTTON_PRIMARY} {
      color: ${TEXT_BLUE};
      border-color: ${TEXT_BLUE};
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_BUTTON_PRIMARY} {
      border-color: ${TEXT_BLUE};
      color: ${TEXT_BLUE};
    }

    ${INFOBOX_BUTTON_PRIMARY}:hover {
      background-color: ${TEXT};
      color: white;
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_BUTTON_PRIMARY}:hover {
      background-color: ${TEXT_BLUE};
      color: ${BLUE};
    }

    ${INFOBOX_BUTTON_SECONDARY} {
      border-style: none;
      border-radius: 16px;
      color: ${TEXT};
      height: 32px;
      font-family: inherit;
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;
      outline: none;
      margin-right: 16px;
      padding: 0 14px;
      transition: background 125ms ease-out,
          border-color 125ms ease-out,
          color 125ms ease-out;
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_BUTTON_SECONDARY} {
      color: ${TEXT_BLUE}
    }

    ${INFOBOX_BUTTON_SECONDARY}:hover {
      color: white;
      background: ${TEXT};
      border-sytle: 2px solid ${TEXT};
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_BUTTON_SECONDARY}:hover {
      color: ${BLUE};
      background: ${TEXT_BLUE};
      border-sytle: 2px solid ${TEXT};
    }

    ${INFOBOX_COUNTER} {
      font-size: 14px;
      font-weight: 200;
      flex: 1 0 auto;
      opacity: 0.75
    }

    ${INFOBOX_DESCRIPTION_WRAPPER} {
      display: flex;
      align-items: flex-start;
    }

    ${INFOBOX_DESCRIPTION_WRAPPER} > button {
      outline: none;
      border: none;
      fill: ${TEXT};
      width: 12px;
      height: 12px;
      opacity: 0.75;
      position: relative;
    }

    ${INFOBOX_DESCRIPTION_WRAPPER} > button > svg {
      display: block;
      position: absolute;
      left: 0px;
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_DESCRIPTION_WRAPPER} > button {
      fill: ${TEXT_BLUE};
    }

    ${INFOBOX_DESCRIPTION} {
      font-family: Adobe Clean, Arial, Helvetica;
      font-size: 14px;
      line-height: 1.5em;
      margin-right: 16px;
      flex: 1 0 auto;
      max-width: 260px;
    }

    ${BLUE_THEME_WRAPPER} ${INFOBOX_DESCRIPTION} {
      font-weight: 200;
    }

    ${INFOBOX_DESCRIPTION} p {
      font-family: unset;
      font-size: 14px;
      font-weight: normal;
      font-family: unset;
      letter-spacing: unset;
      line-height: 1.5em;
      color: unset;
      margin: 0px;
    }

    ${INFOBOX_DESCRIPTION} ul {
      list-style-position: inside;
    }

    ${INFOBOX_DESCRIPTION} ol {
      list-style-position: inside;
    }

    ${INFOBOX_DESCRIPTION} strong {
      font-family: unset;
      font-weight: bold;
      color: unset;
    }

    ${INFOBOX_DESCRIPTION} em {
      font-family: unset;
      font-style: italic;
      color: unset;
    }

    ${INFOBOX_DESCRIPTION} a {
      font-family: unset;
      font-size: unset;
    }

    ${INFOBOX_FOOTER} {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 16px;
    }

    ${INFOBOX_MAIN} {
      padding: ${INFOBOX_MARGIN}px;
    }

    ${INFOBOX_IMAGE} {
      width: 100%;
      height: 100%;
      border-radius: ${INFOBOX_BORDER_RADIUS}px ${INFOBOX_BORDER_RADIUS}px 0px 0px;
    }

    ${INFOBOX_FOOTER} svg {
      fill: ${TEXT};
      margin-right: 8px;
    }

    ${INFOBOX_FOOTER} svg:last-child {
      margin-right: 0px;
    }

    ${TINKERBELL_CIRCLE} {
      width: ${TINKERBELL_SIZE}px;
      height: ${TINKERBELL_SIZE}px;
      border-radius: ${TINKERBELL_SIZE * 0.5}px;
      background: orange;
      position: absolute;
    }

    ${TINKERBELL_CIRCLE_ANIMATED} {
      opacity: 0;
      animation: tinkerbellScale 2s infinite;
    }

    @keyframes tinkerbellScale {
      from {
        transform: scale(1, 1);
        opacity: 1;
      }
      to {
        transform: scale(3, 3);
        opacity: 0;
      }
    }

    @keyframes tinkerbellReveal {
      from {
        transform: scale(0, 0);
        opacity: 0;
      }
      to {
        transform: scale(1, 1);
        opacity: 1;
      }
    }
`,
}

export default InfoBoxStaticStyles
