import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import {
  Box,
  Grid,
  Flex
} from './src'
import { flex } from './src/Box'

// Box
test('Box renders', t => {
  const json = render(<Box m={2} px={3} />).toJSON()
  t.snapshot(json)
})

test('Box renders with props', t => {
  const json = render(<Box
    m={[ 1, 2 ]}
    px={[ 1, 2 ]}
    w={1}
    flex='1 1 auto'
  />)
  t.snapshot(json)
})

test('Box renders with `is` prop', t => {
  const json = render(<Box is='section' />).toJSON()
  t.snapshot(json)
  t.is(json.type, 'section')
})

test('flex util returns null', t => {
  const sx = flex({})
  t.is(sx, null)
})

test('flex util returns a style object', t => {
  const sx = flex({ flex: 'none' })
  t.is(sx.flex, 'none')
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

test('Flex renders with props', t => {
  const flex = render(
    <Flex
      wrap
      direction='column'
      align='center'
      justify='space-between'
    />
  )
  t.snapshot(flex)
})

test('Flex renders with column prop', t => {
  const flex = render(
    <Flex
      column
    />
  )
  t.snapshot(flex)
})

test('Flex renders with responsive props', t => {
  const flex = render(
    <Flex
      wrap={[ true, false ]}
      direction={[ 'column', 'row' ]}
      align={[ 'stretch', 'center' ]}
      justify={[ 'space-between', 'center' ]}
    />
  )
  t.snapshot(flex)
})
