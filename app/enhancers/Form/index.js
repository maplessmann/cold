import { compose } from 'utils/enhancer'
import { withRouter } from 'react-router'

import data from './data'
import handlers from './handlers'
import propsMapper from './propsMapper'

export default compose(
  withRouter,
  data,
  handlers,
  propsMapper
)
