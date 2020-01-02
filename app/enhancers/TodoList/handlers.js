const handlers = () => ({
  onInputChange: ({ updateCurrentTodo }) => e => {
    const value = e.target.value
    updateCurrentTodo(value)
  },

  onFormSubmit: ({ addTodo, currentTodo, tasks }) => e => {
    e.preventDefault()

    addTodo({
      label: currentTodo,
      id: tasks.length + 1,
      isComplete: false,
    })
  },
})

export default handlers
