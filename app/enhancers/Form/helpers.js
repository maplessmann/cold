import { pipe, prop, map, flatten, reduce } from 'ramda'

export const getFieldData = (key, experience) => {
  const toFieldData = (prevData, field) => {
    const fieldName = prop('name', field)
    const metadata = prop(key, field)

    return {
      ...prevData,
      [fieldName]: metadata,
    }
  }

  return pipe(
    prop('steps'),
    map(prop('fields')),
    flatten,
    reduce(toFieldData, {})
  )(experience)
}
