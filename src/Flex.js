import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  propTypes
} from 'styled-system'
import Box from './Box'

const Flex = Box.extend([],
  { display: 'flex' },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...propTypes.flexWrap,
  ...propTypes.flexDirection,
  ...propTypes.alignItems,
  ...propTypes.justifyContent
}

export default Flex
