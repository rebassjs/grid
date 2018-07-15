import React from 'react'
import { create as render } from 'react-test-renderer'
import { Box, Flex } from '../src'
import 'jest-styled-components'

const renderJSON = el => render(el).toJSON()

// Box
test('Box renders', () => {
  const json = renderJSON(<Box m={2} px={3} />)
  expect(json).toMatchSnapshot()
})

test('Box renders with props', () => {
  const json = renderJSON(<Box
    m={[ 1, 2 ]}
    px={[ 1, 2 ]}
    width={1}
    flex='1 1 auto'
    alignSelf='flex-start'
  />)
  expect(json).toMatchSnapshot()
})

// Flex
test('Flex renders', () => {
  const json = renderJSON(<Flex />)
  expect(json).toMatchSnapshot()
})

test('Flex renders with props', () => {
  const json = renderJSON(
    <Flex
      flexWrap='wrap'
      flexDirection='column'
      alignItems='center'
      justifyContent='space-between'
    />
  )
  expect(json).toMatchSnapshot()
})

test('Flex renders with flexDirection prop', () => {
  const json = renderJSON(
    <Flex
      flexDirection='column'
    />
  )
  expect(json).toMatchSnapshot()
})

test('Flex renders with responsive props', () => {
  const json = renderJSON(
    <Flex
      flexWrap={[ 'wrap', 'nowrap' ]}
      flexDirection={[ 'column', 'row' ]}
      alignItems={[ 'stretch', 'center' ]}
      justifyContent={[ 'space-between', 'center' ]}
    />
  )
  expect(json).toMatchSnapshot()
})

test('Box removes grid-styled props', () => {
  const json = renderJSON(
    React.createElement(Box, {
      id: 'hi',
      width: .5,
      color: 'blue',
      fontSize: 4,
      flexWrap: 'wrap'
    })
  )
  expect(json.props.id).toBe('hi')
  expect(json.props.width).toBe(undefined)
  expect(json.props.color).toBe(undefined)
  expect(json.props.fontSize).toBe(undefined)
})

test('Box accepts an is prop to change elements', () => {
  const json = renderJSON(
    React.createElement(Box, {
      is: 'h2'
    })
  )
  expect(json.type).toBe('h2')
})

// system-components
test('Box accepts a css prop', () => {
  const json = renderJSON(
    <Box
      css={{
        outline: '4px solid red'
      }}
    />
  )
  expect(json).toMatchSnapshot()
  expect(json).toHaveStyleRule('outline', '4px solid red')
})

test('Flex accepts an is prop and keeps styles', () => {
  const json = renderJSON(
    <Flex is='footer'
      px={3}
      py={4}
      color='tomato'
      alignItems='center'
      justifyContent='center'
    />
  )
  expect(json.type).toBe('footer')
  expect(json).toHaveStyleRule('padding-left', '16px')
  expect(json).toHaveStyleRule('padding-right', '16px')
  expect(json).toHaveStyleRule('padding-top', '32px')
  expect(json).toHaveStyleRule('padding-bottom', '32px')
  expect(json).toHaveStyleRule('color', 'tomato')
  expect(json).toHaveStyleRule('align-items', 'center')
  expect(json).toHaveStyleRule('justify-content', 'center')
})
