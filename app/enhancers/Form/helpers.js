import { pipe, prop, map, flatten, reduce } from 'ramda'

export const getFieldData = (key, experience, step) => {
  const flattenData = fields =>
    typeof step === 'number' ? fields[step] : flatten(fields)

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
    flattenData,
    reduce(toFieldData, {})
  )(experience)
}
