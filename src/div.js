// deprecated - see https://github.com/jxnblk/styled-system/tree/master/clean-tag
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
  static styledComponentId = 'lol'

  static defaultProps = {
    is: 'div'
  }

  render () {
    const {
      is,
      innerRef,
      ...props
    } = this.props
    const attr = omit(props, blacklist)

    return React.createElement(is, {
      ref: innerRef,
      ...attr
    })
  }
}

export default div
