import 'jest-styled-components'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { Box, Flex } from '../src'

const renderJSON = el => render(el).toJSON()

// Box
test('Box renders', () => {
  const json = render(<Box m={2} px={3} />).toJSON()
  expect(json).toMatchSnapshot()
})

test('Box renders with props', () => {
  const json = render(<Box
    m={[ 1, 2 ]}
    px={[ 1, 2 ]}
    w={1}
    flex='1 1 auto'
    alignSelf='flex-start'
  />).toJSON()
  expect(json).toMatchSnapshot()
})

// Flex
test('Flex renders', () => {
  const json = render(<Flex />).toJSON()
  expect(json).toMatchSnapshot()
})

test('Flex renders with props', () => {
  const json = render(
    <Flex
      flexWrap='wrap'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
    />
  ).toJSON()
  expect(json).toMatchSnapshot()
})

test('Flex renders with legacy props', () => {
  const json = render(
    <Flex
      wrap
      flexDirection='column'
      align='center'
      justify='space-between'
    />
  ).toJSON()
  expect(json).toMatchSnapshot()
})

test('Flex renders with flexDirection prop', () => {
  const json = render(
    <Flex
      flexDirection='column'
    />
  ).toJSON()
  expect(json).toMatchSnapshot()
})

test('Flex renders with responsive props', () => {
  const json = render(
    <Flex
      wrap={[ true, false ]}
      flexDirection={[ 'column', 'row' ]}
      align={[ 'stretch', 'center' ]}
      justify={[ 'space-between', 'center' ]}
    />
  ).toJSON()
  expect(json).toMatchSnapshot()
})

// clean-tag
test('Box removes grid-styled props', () => {
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
  expect(json.props.id).toBe('hi')
  expect(json.props.width).toBe(undefined)
  expect(json.props.color).toBe(undefined)
  expect(json.props.fontSize).toBe(undefined)
  expect(json.props.wrap).toBe(undefined)
})

test('Box accepts an is prop to change elements', () => {
  const json = render(
    React.createElement(Box, {
      is: 'h2'
    })
  ).toJSON()
  expect(json.type).toBe('h2')
})
