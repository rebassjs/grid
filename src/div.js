import React from 'react'
import { propTypes } from 'styled-system'

const blacklist = [
  ...Object.keys({
    ...propTypes.space,
    ...propTypes.width,
    ...propTypes.fontSize,
    ...propTypes.color,
    ...propTypes.flex,
    ...propTypes.alignItems,
    ...propTypes.justifyContent,
    ...propTypes.flexWrap,
    ...propTypes.flexDirection,
  }),
  'order'
]

const omit = (obj, keys) => {
  const next = {}
  for (let key in obj) {
    if (keys.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

const div = props =>
  <div
    ref={props.innerRef}
    {...omit(props, blacklist)}
  />

export default div
