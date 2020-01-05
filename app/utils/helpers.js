import { pipe, prop, replace, split, map, fromPairs } from 'ramda'

export const getQueryStringValue = (string, location) => {
  return pipe(
    prop('search'),
    replace('?', ''),
    split('&'),
    map(split('=')),
    fromPairs,
    prop(string)
  )(location)
}
