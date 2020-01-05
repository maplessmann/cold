import { createFactory } from 'react'

export const compose = (...funcs) => {
  const toComposable = (a, b) => {
    return (...args) => a(b(...args))
  }

  return funcs.reduce(toComposable, arg => arg)
}

export const withProps = propsMapper => BaseComponent => {
  const factory = createFactory(BaseComponent)

  return prevProps =>
    factory({
      ...prevProps,
      ...propsMapper(prevProps),
    })
}

export const withHandlers = handlers => BaseComponent => {
  const factory = createFactory(BaseComponent)
  const handlersWithProps = props =>
    Object.keys(handlers).reduce((prevHandlers, handlerKey) => {
      const handler = {
        [handlerKey]: handlers[handlerKey](props),
      }

      return {
        ...prevHandlers,
        ...handler,
      }
    }, {})

  return prevProps =>
    factory({
      ...prevProps,
      ...handlersWithProps(prevProps),
    })
}
