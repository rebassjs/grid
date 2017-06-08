import React from 'react'
import test from 'ava'
import { create as render } from 'react-test-renderer'
import Flex from './src/Flex'

test('renders', t => {
  const flex = render(<Flex />)
  t.snapshot(flex)
})

