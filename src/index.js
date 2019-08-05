import styled from 'styled-components'
import {
  space,
  color,
  layout,
  flexbox,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

export const Box = styled('div')({
  boxSizing: 'border-box'
},
  space,
  color,
  layout,
  typography,
  flexbox,
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
},
  flexbox,
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...propTypes.flexbox,
}
