import composeEnhancer from 'utils/composeEnhancer'

import handlers from './handlers'
import propsMapper from './propsMapper'

export default composeEnhancer(handlers, propsMapper)
