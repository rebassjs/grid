import comp from '@rebass/components'

export const Box = comp({}, {
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

export const Flex = comp({
  extend: Box
}, { display: 'flex' },
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent'
)

Flex.displayName = 'Flex'
