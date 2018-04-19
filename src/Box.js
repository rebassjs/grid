import styled from 'styled-components'
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  alignSelf
} from 'styled-system'
import tag from 'clean-tag'
import theme from './theme'

const Box = styled(tag)([],
  { boxSizing: 'border-box' },
  width,
  space,
  fontSize,
  color,
  flex,
  order,
  alignSelf
)

Box.displayName = 'Box'

Box.defaultProps = {
  theme
}

Box.propTypes = {
  ...width.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes
}

export default Box
