import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo, updateCurrentTodo } from 'ducks/todo'

const data = () => {
  const state = useSelector(state => state)
  const tasks = useSelector(state => state.todo.tasks)
  const currentTodo = useSelector(state => state.todo.currentTodo)
  const dispatch = useDispatch()

  return {
    state,
    tasks,
    currentTodo,
    addTodo: payload => {
      dispatch(addTodo(payload))
    },
    removeTodo: payload => {
      dispatch(removeTodo(payload))
    },
    updateCurrentTodo: payload => {
      dispatch(updateCurrentTodo(payload))
    },
  }
}

export default data
