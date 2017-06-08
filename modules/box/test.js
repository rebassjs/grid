import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import { space } from 'grid-styled-constants'
import Box, {
  parse,
  getProperties,
  px
} from './src/Box'

test('parses padding props', t => {
  const a = parse(space)({ p: 1 })
  const b = parse(space)({ pt: 2 })
  const c = parse(space)({ pr: 3 })
  const d = parse(space)({ pb: 4 })
  const e = parse(space)({ pl: 1 })
  const f = parse(space)({ px: 2 })
  const g = parse(space)({ py: 3 })
  t.is(a, 'padding:8px')
  t.is(b, 'padding-top:16px')
  t.is(c, 'padding-right:32px')
  t.is(d, 'padding-bottom:64px')
  t.is(e, 'padding-left:8px')
  t.is(f, 'padding-left:16px;padding-right:16px')
  t.is(g, 'padding-top:32px;padding-bottom:32px')
})

test('parses margin props', t => {
  const a = parse(space)({ m: 1 })
  const b = parse(space)({ mt: 2 })
  const c = parse(space)({ mr: 3 })
  const d = parse(space)({ mb: 4 })
  const e = parse(space)({ ml: 1 })
  const f = parse(space)({ mx: 2 })
  const g = parse(space)({ my: 3 })
  t.is(a, 'margin:8px')
  t.is(b, 'margin-top:16px')
  t.is(c, 'margin-right:32px')
  t.is(d, 'margin-bottom:64px')
  t.is(e, 'margin-left:8px')
  t.is(f, 'margin-left:16px;margin-right:16px')
  t.is(g, 'margin-top:32px;margin-bottom:32px')
})

test('renders', t => {
  const json = render(<Box m={2} px={3} />).toJSON()
  t.snapshot(json)
})
