import { createElement as e, SFC } from 'react'
import { ACCORDIAN_CHEVRON } from  '../../svg/icons'
import classNames from 'classnames'

import '../../styles/common/accordianChevron.scss'

interface IAccordianChevronProps {
  isActive: boolean,
}

const AccordianChevron: SFC<IAccordianChevronProps> = ({
  isActive,
}) => e(
  'svg',
  {
    className: classNames(
      'accordian-chevron',
      {
        'active': isActive,
      }
    )
  },
  e(
    'path',
    {
      d: ACCORDIAN_CHEVRON
    }
  )
)

export default AccordianChevron
