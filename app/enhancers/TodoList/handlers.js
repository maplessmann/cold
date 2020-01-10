const handlers = ({
  updateCurrentTodo,
  addTodo,
  currentTodo,
  tasks,
  setLastTodo,
}) => ({
  onInputChange: e => {
    const value = e.target.value
    updateCurrentTodo(value)
  },

  onFormSubmit: e => {
    e.preventDefault()
    setLastTodo(currentTodo)

    addTodo({
      label: currentTodo,
      id: tasks.length + 1,
      isComplete: false,
    })
  },
})

export default handlers
