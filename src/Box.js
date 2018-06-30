import system from 'system-components'
import theme from './theme'

const Box = system({
  theme
}, {
  boxSizing: 'border-box'
},
  'width',
  'space',
  'fontSize',
  'color',
  'flex',
  'order',
  'alignSelf',
)

Box.displayName = 'Box'

export default Box
