import React from 'react'
import styled from 'styled-components'
import Box from 'box-styled'
import { breakpoints } from 'grid-styled-constants'

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
  : 'width:100%;'


const align = props => props.align || 'top'

// hoc to remove unwanted width attribute
const hoc = Comp => ({ width, ...props }) => <Comp {...props} w={width} />

const Grid = hoc(styled(Box)`
  display: inline-block;
  vertical-align: ${align};
  ${width([ null, ...breakpoints ])}
`)

export default Grid
