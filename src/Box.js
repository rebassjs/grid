import React from 'react'
import styled from 'styled-components'
import { space, width, responsiveStyle } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import propTypes from './propTypes'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const Box = styled.div([],
  { boxSizing: 'border-box' },
  width,
  space,
  flex,
  order
)
Box.displayName = 'Box'

const responsivePropType = oneOfType([
  number,
  string,
  array
])

Box.propTypes = Object.assign({}, propTypes, {
  flex: responsivePropType,
  order: responsivePropType
})

export default Box
