import styled from 'styled-components'
import {
  space,
  width,
  flex,
  color,
  fontSize,
  responsiveStyle,
  propTypes
} from 'styled-system'
import div from './div'
import theme from './theme'

export const order = responsiveStyle({
  prop: 'order',
  cssProperty: 'order'
})

const Box = styled(div)([],
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
  ...propTypes.width,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.flex,
  // hack: the propTypes object should export the responsive type
  order: propTypes.width.width
}

export default Box
