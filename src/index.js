import styled from 'styled-components'
import {
  space,
  color,
  layout,
  flexbox,
  typography,
  compose
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

const boxProps = compose(
  space,
  color,
  layout,
  typography,
  flexbox,
)
export const Box = styled('div')({
  boxSizing: 'border-box'
},
  boxProps,
)

Box.displayName = 'Box'

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.flexbox,
}

export const Flex = styled(Box)({
  display: 'flex'
})

Flex.displayName = 'Flex'
