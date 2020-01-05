import composeEnhancer from 'utils/composeEnhancer'

import state from './state'
import data from './data'
import handlers from './handlers'
import propsMapper from './propsMapper'

export default composeEnhancer(state, data, handlers, propsMapper)
