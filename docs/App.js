import React from 'react'
import XRay from 'react-x-ray'
import { ThemeProvider } from 'styled-components'
import {
  LiveProvider,
  LiveError,
  LiveEditor,
  LivePreview
} from 'react-live'
import connect from 'refunk'
import GS, { Flex, Box } from '../src'
import CSS from './CSS'
import GA from './GA'
import Twitter from './Twitter'
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
  Color,
  Bar,
  Button,
  colors
}

const App = connect(class extends React.Component {
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
      <React.Fragment>
        <head>
          <title>Grid Styled</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='description' content='Responsive React grid system built with styled-components' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:title' content='Grid Styled' />
          <meta name='twitter:description' content='Responsive React grid system built with styled-components' />
          <meta name='twitter:image' content='http://jxnblk.com/grid-styled/icon.png' />
          <link rel='stylesheet' href='https://unpkg.com/type-system@1.0.0-beta.2/type-system.css' />
          <CSS />
        </head>
        <body>
          <div style={sx.root}>
            <Flex wrap align='center' style={sx.controls}>
              <BaseButton
                onClick={e => update({ index: 0 })}
                children='Grid Styled'
              />
              <Btn href='https://github.com/jxnblk/grid-styled'>
                GitHub
              </Btn>
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
          <GA />
          <Twitter />
        </body>
      </React.Fragment>
    )
  }
})

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

App.defaultProps = {
  index: 0,
  xray: false
}

export default App
