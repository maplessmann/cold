import TodoList from 'components/TodoList'
import Form from 'components/Form'

const Home = () => {
  return (
    <div className="page-home">
      <h1>❄️ Cold boilerplate</h1>
      <TodoList />
      <Form />
    </div>
  )
}

export default Home
