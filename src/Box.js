import React from 'react'
import styled from 'styled-components'
import { space, width, responsiveStyle } from 'styled-system'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const Box = styled.div([],
  { boxSizing: 'border-box' },
  width,
  space,
  flex,
  order
)

export default Box
