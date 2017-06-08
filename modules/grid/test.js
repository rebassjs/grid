import React from 'react'
import test from 'ava'
import { create as render } from 'react-test-renderer'
import Grid, {
  Half,
  Third,
  Quarter,
  toArray,
  percent,
  media,
  width
} from './src/Grid'

test('toArray converts values to arrays', t => {
  const arr = [ 1, 2 ]
  const num = 2
  const a = toArray(arr)
  const b = toArray(num)
  t.deepEqual(a, [ 1, 2 ])
  t.deepEqual(b, [ 2 ])
})

test('percent converts numbers to percent values', t => {
  const a = percent(0)
  const b = percent(1/2)
  const c = percent(1)
  const d = percent(16)
  t.is(a, '0%')
  t.is(b, '50%')
  t.is(c, '100%')
  t.is(d, 16)
})

test('media wraps numbers in a media query string', t => {
  const a = media(40)
  t.is(a, '@media screen and (min-width:40em)')
})

test('width converts width props to css', t => {
  const a = width([])({ width: 1 })
  const b = width([ null, 40 ])({ width: [ 1, 1/2 ] })
  t.is(a, 'width:100%;')
  t.is(b, 'width:100%;\n@media screen and (min-width:40em){width:50%;}')
})

test('renders', t => {
  const grid = render(<Grid />)
  t.snapshot(grid)
})

test('has a classname', t => {
  const div = render(<Grid />).toJSON()
  t.truthy(div.props.className)
})

test.todo('generates a certain css string')

test('Half renders', t => {
  t.notThrows(() => {
    render(<Half />)
  })
})

test('Third renders', t => {
  t.notThrows(() => {
    render(<Third />)
  })
})

test('Quarter renders', t => {
  t.notThrows(() => {
    render(<Quarter />)
  })
})

