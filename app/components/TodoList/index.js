// import { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, removeTodo, updateCurrentTodo } from 'ducks/todo'

const TodoList = ({ state, addTodo, removeTodo, updateCurrentTodo }) => {
  const { tasks, currentTodo } = state

  const onInputChange = e => {
    const value = e.target.value
    updateCurrentTodo(value)
  }

  const onFormSubmit = e => {
    e.preventDefault()

    addTodo({
      label: currentTodo,
      id: tasks.length + 1,
      isComplete: false,
    })
  }

  console.log({ state })

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          id="form-todo"
          type="text"
          value={currentTodo}
          onChange={onInputChange}
        />
        <button>Add</button>
      </form>
      <ul className="todo-list">
        {tasks.map(({ label, isComplete, id }, index) => (
          <li className="todo-item" key={index}>
            <input type="checkbox" defaultChecked={isComplete} />
            {label}{' '}
            <button type="button" onClick={() => removeTodo(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

const mapDispatchToProps = { addTodo, removeTodo, updateCurrentTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
