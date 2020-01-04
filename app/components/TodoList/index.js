import TodoListEnhancer from 'enhancers/TodoList'

const TodoList = ({
  tasks,
  currentTodo,
  removeTodo,
  onInputChange,
  onFormSubmit,
}) => {
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

export default TodoListEnhancer(TodoList)
