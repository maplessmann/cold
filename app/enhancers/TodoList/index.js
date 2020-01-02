import data from './data'
import handlers from './handlers'

export default Component => {
  return () => {
    const props = {
      ...data(),
      ...handlers(),
    }

    return <Component {...props} />
  }
}
