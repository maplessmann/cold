const INITIAL_STATE = {
  tasks: [
    { name: 'Init boilerplate', id: 1, isComplete: true },
    { name: 'Config webpack', id: 2, isComplete: true },
    { name: 'Complete boilerplate', id: 3, isComplete: false },
  ],
}

const todoReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case 'TODO_ADD':
      return {
        ...state,
        tasks: [...state.tasks, payload],
      }
    default:
      return state
  }
}

export default todoReducer
