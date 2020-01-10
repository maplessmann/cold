import composeEnhancer from 'utils/composeEnhancer'

import data from './data'
import state from './state'
import handlers from './handlers'
import effects from './effects'
import propsMapper from './propsMapper'

export default composeEnhancer(
  data,
  state,
  handlers,
  propsMapper,
  effects,
)
