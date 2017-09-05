import React from 'react'
import XRay from 'react-x-ray'
import { ThemeProvider } from 'styled-components'
import {
  LiveProvider,
  LiveError,
  LiveEditor,
  LivePreview
} from 'react-live'
import { createProvider } from 'funcup'
import GS, {
  Flex,
  Box,
  Grid,
  Container,
  Row,
  Column
} from 'grid-styled'
import Hide from 'hidden-styled'
import { colors } from './styles'
import Color from './Color'
import Bar from './Bar'
import Button from './Button'
import ArrowButton from './ArrowButton'
import BaseButton from './BaseButton'
import Footer from './Footer'
import Tweet from './Tweet'
import examples from './examples'
import { inc, dec, toggleXRay } from './updaters'

const Btn = BaseButton.withComponent('a')

const scope = {
  Flex,
  Box,
  Grid,
  Container,
  Row,
  Column,
  Color,
  Bar,
  Button,
  colors
}

class App extends React.Component {
  componentDidMount () {
    const { update } = this.props
    document.body.addEventListener('keydown', e => {
      console.log(e.key)
      if (document.activeElement.tagName !== 'BODY') return
      switch (e.key) {
        case 'ArrowLeft':
          update(dec)
          break
        case 'ArrowRight':
          update(inc)
          break
      }
    })
  }

  render () {
    const {
      xray,
      index,
      update
    } = this.props

    const code = examples[Math.abs(index) % examples.length]

    return (
      <div style={sx.root}>
        <Flex wrap align='center' style={sx.controls}>
          <Hide xs>
            <BaseButton
              onClick={e => update({ index: 0 })}
              children='Grid Styled'
            />
          </Hide>
          <Hide xs>
            <Btn href='https://github.com/jxnblk/grid-styled'>
              GitHub
            </Btn>
          </Hide>
          <Box ml='auto' />
            <Tweet />
          <Box ml={2} />
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
          <LiveEditor style={sx.bottom} />
        </LiveProvider>
        <Footer />
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
    color: colors.magenta,
    backgroundColor: '#000',
    WebkitFontSmoothing: 'antialiased'
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

const initialState = {
  index: 0,
  xray: false
}

export default createProvider(initialState)(App)
