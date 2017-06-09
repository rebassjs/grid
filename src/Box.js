import React from 'react'
import styled from 'styled-components'
import { breakpoints, space } from './constants'

const REG = /^[mp][trblxy]?$/

export const toArray = n => Array.isArray(n) ? n : [ n ]
export const percent = n => (typeof n !== 'number' || n > 1) ? n : `${n * 100}%`
export const media = size => `@media screen and (min-width:${size}em)`
export const width = breaks => props => props.w
  ? (
    toArray(props.w).map((n, i) => breaks[i]
      ? `${media(breaks[i])}{width:${percent(n)};}`
      : `width:${percent(n)};`
    ).join('\n')
  )
  : ''

export const whitespace = scale => props => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  return keys.map(key => {
    const p = getProperties(key)
    const val = px(scale)(props[key])
    return p.map(prop => `${prop}:${val}`).join(';')
  }).join(';')
}

export const getProperties = key => {
  const [ a, b ] = key.split('')
  const prop = properties[a]
  const dirs = directions[b] || [ '' ]
  return dirs.map(dir => prop + dir)
}

export const px = scale => n => typeof n === 'number' ? neg(scale, n) + 'px' : n
export const neg = (scale, n) => (scale[Math.abs(n)] || Math.abs(n)) * (n < 0 ? -1 : 1)

const properties = {
  m: 'margin',
  p: 'padding'
}

const directions = {
  t: [ '-top' ],
  r: [ '-right' ],
  b: [ '-bottom' ],
  l: [ '-left' ],
  x: [ '-left', '-right' ],
  y: [ '-top', '-bottom' ]
}

// hoc to remove unwanted width attribute
const hoc = Comp => ({ width, ...props }) => <Comp {...props} w={width} />

const Box = hoc(styled.div`
  box-sizing:border-box;
  ${width([ null, ...breakpoints ])}
  ${whitespace(space)}
`)

export default Box
