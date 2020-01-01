import { createStore } from 'redux'
import todoReducer from 'ducks/todo'

export default createStore(todoReducer)