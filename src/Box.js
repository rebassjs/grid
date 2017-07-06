import React from 'react'
import { compose } from 'recompose'
import styled from 'styled-components'
import { space, width } from 'styled-system'

const withStyled = (...styles) => Comp => styled(Comp)([], ...styles)

// hoc to remove unwanted width attribute
const hoc = Comp => ({ width, ...props }) => <Comp {...props} w={props.w || width} />

export const flex = props => props.flex ? ({ flex: props.flex }) : null

const styles = withStyled(
  { boxSizing: 'border-box' },
  width,
  space,
  flex
)

const Box = compose(
  hoc,
  styles,
)('div')

export default Box
