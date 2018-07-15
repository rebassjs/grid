import system from 'system-components'

export const Box = system({}, {
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

export const Flex = system({
  is: Box
}, { display: 'flex' },
  'flexWrap',
  'flexDirection',
  'alignItems',
  'justifyContent'
)

Flex.displayName = 'Flex'
