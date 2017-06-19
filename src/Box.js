import React from 'react'
import styled from 'styled-components'
import { space, width } from 'styled-system'

// hoc to remove unwanted width attribute
const hoc = Comp => ({ width, ...props }) => <Comp {...props} w={width} />

export const flex = props => props.flex ? ({ flex: props.flex }) : null

const Box = hoc(styled.div([],
  { boxSizing: 'border-box' },
  width,
  space,
  flex
))

export default Box
