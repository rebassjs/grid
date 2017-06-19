import React from 'react'
import styled from 'styled-components'
import { space, width } from 'styled-system'

// hoc to remove unwanted width attribute
const hoc = Comp => ({ width, ...props }) => <Comp {...props} w={width} />

const Box = hoc(styled.div([],
  { boxSizing: 'border-box' },
  width,
  space
))

export default Box
