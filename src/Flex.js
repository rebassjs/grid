import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system'
import styled from 'styled-components'
import Box from './Box'

const Flex = styled(Box)([],
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
