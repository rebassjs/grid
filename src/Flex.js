import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
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
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}

export default Flex
