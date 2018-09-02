import React from 'react'
import { XRay } from '@compositor/kit'
import { Link } from 'mdx-go'
import {
  LiveProvider,
  LiveError,
  LiveEditor,
  LivePreview
} from 'react-live'
import { Flex, Box } from '../src'
import {
  Color,
  Bar,
  Button,
  BaseButton,
  ArrowButton,
  Heading,
  Text,
  colors
} from './components'
import { examples } from './examples'
import Component from '@reach/component-component'

export { Root } from './components'

const scope = {
  Flex,
  Box,
  Link,
  Color,
  Bar,
  Button,
  Heading,
  Text,
  colors
}

const dec = state => ({ index: state.index - 1 })
const inc = state => ({ index: state.index + 1 })
const toggle = key => state => ({ [key]: !state[key] })

const Toolbar = ({
  setState,
  index,
  xray,
  ...props
}) =>
  <Flex
    flexWrap='wrap'
    alignItems='center'
    color={colors.magenta}
    bg='black'>
    <BaseButton
      is={Link}
      href='/getting-started'
      children='Documentation'
    />
    <Box mx='auto' />
    <BaseButton
      onClick={e => setState(toggle('xray'))}
      active={xray}
      children='X-Ray'
    />
    <ArrowButton
      left
      title='Previous'
      onClick={e => setState(dec)}
    />
    <ArrowButton
      onClick={e => setState(inc)}
      title='Next'
    />
  </Flex>

const sx = {
  top: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
  },
  preview: {
    width: '100%'
  },
  bottom: {
    minHeight: '40vh',
    fontFamily: 'SF Mono, Menlo, monospace',
    fontSize: 12,
    margin: 0,
    padding: 16,
    overflow: 'auto',
    color: colors.cyan,
    backgroundColor: '#000',
    outline: 'none',
    WebkitFontSmoothing: 'antialiased'
  },
  error: {
    fontFamily: 'SF Mono, Menlo, monospace',
    fontSize: 12,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    right: 0,
    left: 0,
    padding: 16,
    color: '#fff',
    backgroundColor: '#f00'
  },
  xray: {
    transition: 'background-color .3s ease-out'
  }
}

export default props =>
  <Component
    initialState={{
      index: 0,
      xray: false
    }}
    children={({ state, setState }) => {
      const code = examples[Math.abs(state.index) % examples.length] || '<pre>missing example</pre>'

      return (
        <React.Fragment>
          <Toolbar {...state} setState={setState} />
          <LiveProvider
            code={code}
            scope={scope}
            mountStylesheet={false}>
            <XRay
              disabled={!state.xray}
              style={sx.xray}
              color={colors.magenta}
              backgroundColor='#000'>
              <div style={sx.top}>
                <LivePreview style={sx.preview} />
              </div>
            </XRay>
            <LiveError style={sx.error} />
            <LiveEditor style={sx.bottom} />
          </LiveProvider>
        </React.Fragment>
      )
    }}
  />
