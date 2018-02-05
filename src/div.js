import React from 'react'
import { propTypes } from 'styled-system'

const blacklist = [
  'theme',
  'innerRef',
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

class div extends React.Component {
  render () {
    const { innerRef, ...props } = this.props
    const attr = omit(props, blacklist)
    return <div ref={innerRef} {...attr} />
  }
}

// Trick styled-components into passing innerRef
div.styledComponentId = 'lol'

export default div
