import styled from 'styled-components'
import system from 'system-components'
import Box from './Box'

const {
  componentStyle: {
    rules: flexRules
  }
} = system({},
  { display: 'flex' },
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent'
)

const Flex = styled(Box)([], ...flexRules);

Flex.displayName = 'Flex'

export default Flex
