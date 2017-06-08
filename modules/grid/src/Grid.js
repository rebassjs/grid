import React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'grid-styled-constants'

export const toArray = n => Array.isArray(n) ? n : [ n ]
// todo: add px
export const percent = n => (typeof n !== 'number' || n > 1) ? n : `${n * 100}%`
export const media = size => `@media screen and (min-width:${size}em)`
export const width = breaks => props => props.width
  ? (
    toArray(props.width).map((n, i) => breaks[i]
      ? `${media(breaks[i])}{width:${percent(n)};}`
      : `width:${percent(n)};`
    ).join('\n')
  )
  : null


const align = props => props.align || 'top'

const Grid = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: ${align};
  width: 100%;
  ${width([ null, ...breakpoints ])}
`
  /* replace with box-styled
  padding-left: ${pad}px;
  padding-right: ${pad}px;
  */

// Move to separate package
export const Half = props => <Grid {...props} width={[ 1, 1/2 ]} />
export const Third = props => <Grid {...props} width={[ 1, 1/3 ]} />
export const Quarter = props => <Grid {...props} width={[ 1, 1/4 ]} />

const φ = (1 + Math.sqrt(5)) / 2
const ga = φ - 1
const gb = 1 - ga

export const GoldenA = props => <Grid {...props} width={[ 1, ga ]} />
export const GoldenB = props => <Grid {...props} width={[ 1, gb ]} />

export default Grid

