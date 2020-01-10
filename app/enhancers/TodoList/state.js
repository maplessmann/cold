import { useState } from 'react'

const state = () => {
  const [lastTodo, setLastTodo] = useState('')

  return {
    lastTodo,
    setLastTodo,
  }
}

export default state
