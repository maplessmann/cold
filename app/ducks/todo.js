const INITIAL_STATE = {
  tasks: [
    { label: 'Init boilerplate', id: 1, isComplete: true },
    { label: 'Config webpack', id: 2, isComplete: true },
    { label: 'Complete boilerplate', id: 3, isComplete: false },
  ],
  currentTodo: '',
}

export const addTodo = payload => {
  return {
    type: 'TODO_ADD',
    payload,
  }
}

export const removeTodo = payload => {
  return {
    type: 'TODO_REMOVE',
    payload,
  }
}

export const updateCurrentTodo = payload => {
  return {
    type: 'CURRENT_UPDATE',
    payload,
  }
}

const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case 'TODO_ADD':
      return {
        ...state,
        tasks: [...state.tasks, payload],
        currentTodo: '',
      }
    case 'TODO_REMOVE':
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== payload)
      }
    case 'CURRENT_UPDATE':
      return {
        ...state,
        currentTodo: payload,
      }
    default:
      return state
  }
}

export default todoReducer
