import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import {
  Box,
  Grid,
  Flex
} from './src'
import { breakpoints, space } from './src/constants'
import {
  whitespace,
  getProperties,
  px,
  toArray,
  percent,
  media,
  width
} from './src/Box'

// Box
test('parses padding props', t => {
  const a = whitespace(space)({ p: 1 })
  const b = whitespace(space)({ pt: 2 })
  const c = whitespace(space)({ pr: 3 })
  const d = whitespace(space)({ pb: 4 })
  const e = whitespace(space)({ pl: 1 })
  const f = whitespace(space)({ px: 2 })
  const g = whitespace(space)({ py: 3 })
  t.is(a, 'padding:8px')
  t.is(b, 'padding-top:16px')
  t.is(c, 'padding-right:32px')
  t.is(d, 'padding-bottom:64px')
  t.is(e, 'padding-left:8px')
  t.is(f, 'padding-left:16px;padding-right:16px')
  t.is(g, 'padding-top:32px;padding-bottom:32px')
})

test('parses margin props', t => {
  const a = whitespace(space)({ m: 1 })
  const b = whitespace(space)({ mt: 2 })
  const c = whitespace(space)({ mr: 3 })
  const d = whitespace(space)({ mb: 4 })
  const e = whitespace(space)({ ml: 1 })
  const f = whitespace(space)({ mx: 2 })
  const g = whitespace(space)({ my: 3 })
  t.is(a, 'margin:8px')
  t.is(b, 'margin-top:16px')
  t.is(c, 'margin-right:32px')
  t.is(d, 'margin-bottom:64px')
  t.is(e, 'margin-left:8px')
  t.is(f, 'margin-left:16px;margin-right:16px')
  t.is(g, 'margin-top:32px;margin-bottom:32px')
})

test('Box renders', t => {
  const json = render(<Box m={2} px={3} />).toJSON()
  t.snapshot(json)
})

// Grid
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
  const a = width([])({ w: 1/2 })
  const b = width([ 40 ])({ w: [ 1/2, 1/4 ] })
  t.is(a, 'width:50%;')
  t.is(b, 'width:50%;\n@media screen and (min-width:40em){width:25%;}')
})

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

