import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import {
  Box,
  Grid,
  Flex
} from './src'
import { breakpoints, space } from './src/constants'

// Box
test('Box renders', t => {
  const json = render(<Box m={2} px={3} />).toJSON()
  t.snapshot(json)
})

// Grid
test('Grid renders', t => {
  const grid = render(<Grid />)
  t.snapshot(grid)
})

test('Grid has a classname', t => {
  const div = render(<Grid />).toJSON()
  t.truthy(div.props.className)
})

// Flex
test('Flex renders', t => {
  const flex = render(<Flex />)
  t.snapshot(flex)
})

