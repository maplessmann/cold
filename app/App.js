import React, { useState, lazy } from 'react'
import { hot } from 'react-hot-loader'
import Button from './components/Button'
import DynamicLoad from './components/DynamicLoad'
const Message = lazy(() => import(`./components/Message`))

const App = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false)

  return (
    <div className="app-layout">
      <h1>Coold is cool!</h1>
      <Button onClick={() => setIsButtonClicked(true)}>
        Click to Asynchronously load a component
      </Button>
      <DynamicLoad when={isButtonClicked}>
        <Message text="I was loaded with code-splitting!" />
      </DynamicLoad>
    </div>
  )
}

export default hot(module)(App)
