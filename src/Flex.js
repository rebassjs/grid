import React from 'react'
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'
import Box from './Box'

const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
const direction = responsiveStyle('flex-direction', 'direction')
const align = props => props.align ? `align-items:${props.align};` : null
const justify = props => props.justify ? `justify-content:${props.justify};` : null
const column = props => props.column ? `flex-direction:column;` : null

const Flex = styled(Box)([],
  { display: 'flex' },
  wrap,
  direction,
  align,
  justify,
  column
)

export default Flex
