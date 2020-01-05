import { compose } from 'utils/enhancer'

import handlers from './handlers'
import propsMapper from './propsMapper'

export default compose(
  handlers,
  propsMapper
)
