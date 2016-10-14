
import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import Grid, {
  Half,
  Third,
  Quarter
} from '../src/Grid'

test('renders', t => {
  t.notThrows(() => {
    shallow(<Grid />)
  })
})

test('has a classname', t => {
  const wrapper = shallow(<Grid />)
  t.truthy(wrapper.props().className)
})

test('generates a certain css string', t => {
  console.log('No idea how to test this')
})

test('Half renders', t => {
  t.notThrows(() => {
    shallow(<Half />)
  })
})

test('Third renders', t => {
  t.notThrows(() => {
    shallow(<Third />)
  })
})

test('Quarter renders', t => {
  t.notThrows(() => {
    shallow(<Quarter />)
  })
})

