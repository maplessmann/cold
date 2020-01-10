import { useEffect } from 'react'

const effects = props => {
  useEffect(() => {
    console.log('Todo rendered!', props)
  })
}

export default effects
