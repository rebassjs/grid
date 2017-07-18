import React from 'react'
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'
import { oneOfType, number, string, array, bool } from 'prop-types'
import propTypes from './propTypes'
import Box from './Box'

const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
const direction = responsiveStyle('flex-direction', 'direction')
const align = props => responsiveStyle('align-items', 'align')
const justify = props => responsiveStyle('justify-content', 'justify')
const column = props => props.column ? `flex-direction:column;` : null

const Flex = styled(Box)([],
  { display: 'flex' },
  wrap,
  column,
  direction,
  align,
  justify,
)
Flex.displayName = 'Flex'

const responsivePropType = oneOfType([
  number,
  string,
  array,
  bool
])

Flex.propTypes = Object.assign({}, propTypes, {
  wrap: responsivePropType,
  direction: responsivePropType,
  align: responsivePropType,
  justify: responsivePropType,
  column: bool
})

export default Flex
