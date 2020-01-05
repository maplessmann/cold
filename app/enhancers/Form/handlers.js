import { withHandlers } from 'utils/enhancer'

const handlers = withHandlers({
  handleSubmit: () => payload => {
    console.log('Form submitted!', payload)
  },
})

export default handlers
