import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  flex,
  order,
  alignSelf
} from 'styled-system'

export const Box = styled('div')({
  boxSizing: 'border-box'
},
  space,
  color,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  props => props.css
)

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
}

export const Flex = styled(Box)({
  display: 'flex'
},
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
}
