import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { Box, Flex } from './src'

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
  />).toJSON()
  t.snapshot(json)
})

// Flex
test('Flex renders', t => {
  const flex = render(<Flex />).toJSON()
  t.snapshot(flex)
})

test('Flex renders with props', t => {
  const flex = render(
    <Flex
      flexWrap='wrap'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
    />
  ).toJSON()
  t.snapshot(flex)
})

test('Flex renders with legacy props', t => {
  const flex = render(
    <Flex
      wrap
      flexDirection='column'
      align='center'
      justify='space-between'
    />
  ).toJSON()
  t.snapshot(flex)
})

test('Flex renders with flexDirection prop', t => {
  const flex = render(
    <Flex
      flexDirection='column'
    />
  ).toJSON()
  t.snapshot(flex)
})

test('Flex renders with responsive props', t => {
  const flex = render(
    <Flex
      wrap={[ true, false ]}
      flexDirection={[ 'column', 'row' ]}
      align={[ 'stretch', 'center' ]}
      justify={[ 'space-between', 'center' ]}
    />
  ).toJSON()
  t.snapshot(flex)
})

// clean-tag
test('Box removes grid-styled props', t => {
  const json = render(
    React.createElement(Box, {
      id: 'hi',
      width: .5,
      color: 'blue',
      fontSize: 4,
      wrap: true,
      flexWrap: 'wrap'
    })
  ).toJSON()
  t.is(json.props.id, 'hi')
  t.is(json.props.width, undefined)
  t.is(json.props.color, undefined)
  t.is(json.props.fontSize, undefined)
  t.is(json.props.wrap, undefined)
})

test('Box accepts an is prop to change elements', t => {
  const json = render(
    React.createElement(Box, {
      is: 'h2'
    })
  ).toJSON()
  t.is(json.type, 'h2')
})
