import { createElement as e, SFC } from 'react'

const Loader: SFC = () => e(
  'div',
  {
    className: 'spectrum-Loader spectrum-Loader--indeterminate spectrum-Loader--large',
  },
  e(
    'div',
    {
      className: 'spectrum-Loader-track',
    },
  ),
  e(
    'div',
    {
      className: 'spectrum-Loader-fills',
    },
    e(
      'div',
      {
        className: 'spectrum-Loader-fill-mask-1',
      },
      e(
        'div',
        {
          className: 'spectrum-Loader-fill-submask-1',
        },
        e(
          'div',
          {
            className: 'spectrum-Loader-fill'
          }
        )
      )
    ),
    e(
      'div',
      {
        className: 'spectrum-Loader-fill-mask-2',
      },
      e(
        'div',
        {
          className: 'spectrum-Loader-fill-submask-2',
        },
        e(
          'div',
          {
            className: 'spectrum-Loader-fill'
          }
        )
      )
    )
  )
)

export default Loader
