import { combineReducers } from 'redux'
import todoReducer from './todo'

const reducers = combineReducers({
  todo: todoReducer
})

export default reducers
