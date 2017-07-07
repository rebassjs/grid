import React from 'react'
import styled from 'styled-components'
import { space, width, responsiveStyle } from 'styled-system'

export const flex = responsiveStyle('flex')

const Box = styled.div([],
  { boxSizing: 'border-box' },
  width,
  space,
  flex
)

export default Box
