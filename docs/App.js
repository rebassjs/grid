import React from 'react'
import XRay from 'react-x-ray'
import {
  LiveProvider,
  LiveError,
  LiveEditor,
  LivePreview
} from 'react-live'
import { createProvider } from 'funcup'
import GS, { Flex, Box, Grid } from 'grid-styled'
import { colors } from './styles'
import Color from './Color'
import Bar from './Bar'
import Button from './Button'
import ArrowButton from './ArrowButton'
import BaseButton from './BaseButton'
import examples from './examples'
import { inc, dec, toggleXRay } from './updaters'

const Btn = BaseButton.withComponent('a')

const scope = {
  Flex,
  Box,
  Grid,
  Color,
  Bar,
  Button,
  colors
}

class App extends React.Component {
  render () {
    const {
      xray,
      index,
      update
    } = this.props

    const code = examples[Math.abs(index) % examples.length]

    return (
      <div style={sx.root}>
        <LiveProvider
          code={code}
          scope={scope}
          mountStylesheet={false}>
          <XRay
            disabled={!xray}
            style={sx.xray}
            color={colors.magenta}
            backgroundColor='#000'>
            <div style={sx.top}>
              <LivePreview style={sx.preview} />
            </div>
          </XRay>
          <LiveError style={sx.error} />
          <Flex align='center' style={sx.controls}>
            <Btn href='https://github.com/jxnblk/grid-styled'>
              GitHub
            </Btn>
            <Btn href='http://jxnblk.com'>
              Made by Jxnblk
            </Btn>
            <Box ml='auto' />
            <BaseButton
              onClick={e => update(toggleXRay)}
              active={xray}
              children='X-Ray'
            />
            <ArrowButton
              left
              title='Previous'
              onClick={e => update(dec)}
            />
            <ArrowButton
              onClick={e => update(inc)}
              title='Next'
            />
          </Flex>
          <LiveEditor style={sx.bottom} />
        </LiveProvider>
      </div>
    )
  }
}

const sx = {
  root: {
    position: 'relative'
  },
  top: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
  },
  preview: {
    width: '100%'
  },
  controls: {
    color: colors.teal,
    backgroundColor: '#444',
    WebkitFontSmoothing: 'antialiased'
  },
  bottom: {
    minHeight: '40vh',
    fontFamily: 'SF Mono, Menlo, monospace',
    fontSize: 12,
    margin: 0,
    padding: 16,
    overflow: 'auto',
    color: colors.teal,
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

const initialState = {
  index: 0,
  xray: false
}

export default createProvider(initialState)(App)
