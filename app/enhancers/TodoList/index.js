import composeEnhancer from 'utils/composeEnhancer'

import data from './data'
import handlers from './handlers'

export default composeEnhancer(
  data,
  handlers,
)
