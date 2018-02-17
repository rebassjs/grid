import styled from 'styled-components'
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
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
  order
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
}

export default Box
