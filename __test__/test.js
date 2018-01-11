import test from 'ava'
import React from 'react'
import styled from 'styled-components'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  Box,
  Grid,
  Flex
} from '../src'
import { flex } from '../src/Box'
Enzyme.configure({ adapter: new Adapter() })

// Box
test('Box renders', t => {
  const json = shallow(<Box m={2} px={3} />);
  t.snapshot(json)
})

test('Box renders with props', t => {
  const json = shallow(<Box
    m={[ 1, 2 ]}
    px={[ 1, 2 ]}
    w={1}
    flex='1 1 auto'
  />)
  t.snapshot(json)
})

test('Box can be extended', t => {
  const MyBox = styled(Box)`
    background-color: ${props => props.isActive ? 'blue' : 'red'};
  `;
  const json = shallow(<MyBox
    m={[ 1, 2 ]}
    px={[ 1, 2 ]}
    w={1}
    flex='1 1 auto'
    isActive
  />)
  t.snapshot(json)
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
  const grid = shallow(<Grid />)
  t.snapshot(grid)
})

test('Grid has a classname', t => {
  const div = shallow(<Grid />)
  t.truthy(div.props().className)
})

// Flex
test('Flex renders', t => {
  const flex = shallow(<Flex />)
  t.snapshot(flex)
})

test('Flex renders with props', t => {
  const flex = shallow(
    <Flex
      flex-wrap
      direction='column'
      align='center'
      justify='space-between'
    />
  )
  t.snapshot(flex)
})

test('Flex renders with column prop', t => {
  const flex = shallow(
    <Flex
      column
    />
  )
  t.snapshot(flex)
})

test('Flex renders with responsive props', t => {
  const flex = shallow(
    <Flex
      flex-wrap={[ true, false ]}
      direction={[ 'column', 'row' ]}
      align={[ 'stretch', 'center' ]}
      justify={[ 'space-between', 'center' ]}
    />
  )
  t.snapshot(flex)
})
