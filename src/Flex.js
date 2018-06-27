import system from 'system-components'
import Box from './Box'

const Flex = system({
  is: Box
}, {
  // potential bug?
  // boxSizing: 'border-box',
  display: 'flex'
},
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent'
)

Flex.displayName = 'Flex'

export default Flex
