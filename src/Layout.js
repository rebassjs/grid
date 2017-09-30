import React from 'react'
import styled from 'styled-components'
import {
  width,
  space,
  alignItems,
  justifyContent,
} from 'styled-system'
import { oneOfType, number, string, array, bool } from 'prop-types'
import propTypes from './propTypes'

const Layout = styled('div')`
  display: flex;
  flex-wrap: wrap;
  & > * {
    box-sizing: border-box;
    ${space}
    ${width}
  }

  ${alignItems}
  ${justifyContent}
`

Layout.displayName = 'Layout'

const responsivePropType = oneOfType([
  number,
  string,
  array,
  bool
])

Layout.propTypes = Object.assign({}, propTypes, {
  align: responsivePropType,
  justify: responsivePropType
})

export default Layout
