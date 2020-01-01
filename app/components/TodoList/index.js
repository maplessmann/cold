// import { useState } from 'react'
import { connect } from 'react-redux'
import { updateCurrentTodo } from 'ducks/todo'

const TodoList = ({ state, updateCurrentTodo }) => {
  const { tasks, currentTodo } = state

  const onInputChange = e => {
    const value = e.target.value
    updateCurrentTodo(value)
  }

  console.log({ state })

  return (
    <div>
      <form>
        <input
          id="form-todo"
          type="text"
          value={currentTodo}
          onChange={onInputChange}
        />
        <button>Add</button>
      </form>
      <ul className="todo-list">
        {tasks.map(({ label, isComplete }, index) => (
          <li className="todo-item" key={index}>
            <input type="checkbox" defaultChecked={isComplete} />
            {label}{' '}
            <button type="button" onClick={() => removeTodo(index)}>
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

const mapDispatchToProps = { updateCurrentTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
