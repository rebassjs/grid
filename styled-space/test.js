import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import Space from './src'

const renderJSON = el => render(el).toJSON()

test('renders', t => {
  const json = renderJSON(<Space />)
  t.snapshot(json)
})

test('renders children', t => {
  const json = renderJSON(
    <Space>
      <div>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  t.snapshot(json)
})

test('adds classNames to children', t => {
  const json = renderJSON(
    <Space mx={2}>
      <div>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  const { className } = json[0].props
  t.true(json[0].props.className.length > 0)
  t.is(json[1].props.className, className)
})

test('merges with existing child classNames', t => {
  const json = renderJSON(
    <Space mx={2}>
      <div className='beep'>Hello</div>
      <h2>hi</h2>
    </Space>
  )
  const { className } = json[0].props
  t.regex(className, /^beep\s/)
})
