
import React from 'react'
import styled from 'styled-components'

const breakpoints = {
  small: '40em',
  medium: '52em',
  large: '64em'
}

const ms = size => `@media screen and (min-width: ${size})`
const mx = point => props => typeof props.theme.breakpoints === 'object'
  ? ms(props.theme.breakpoints[point]) : ms(breakpoints[point])

const pad = props => typeof props.theme.gutter === 'number' ? props.theme.gutter : 32

const p = n => typeof n !== 'undefined' ? `${n * 100}%` : null

const width = key => props => props[key] ? `width: ${p(props[key])};` : null

const align = props => props.align || 'top'

const Grid = styled('div')`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: ${align};
  padding-left: ${pad}px;
  padding-right: ${pad}px;
  width: 100%;
  ${width('xs')}
  ${mx('small')} {
    ${width('sm')}
  }
  ${mx('medium')} {
    ${width('md')}
  }
  ${mx('large')} {
    ${width('lg')}
  }
`

export const Half = props => <Grid {...props} sm={1/2} />
export const Third = props => <Grid {...props} sm={1/3} />
export const Quarter = props => <Grid {...props} md={1/4} />

const φ = (1 + Math.sqrt(5)) / 2
const ga = φ - 1
const gb = 1 - ga

export const GoldenA = props => <Grid {...props} sm={ga} />
export const GoldenB = props => <Grid {...props} sm={gb} />

export default Grid

