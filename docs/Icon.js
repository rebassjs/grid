import React from 'react'
import { gradient, colors } from './styles'

const Icon = () => (
  <div style={sx.root}>
    <div width={320}>
      GS
      <div style={sx.bar} />
    </div>
  </div>
)

const sx = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 64,
    fontFamily: '--apple-system, sans-serif',
    fontSize: 320,
    fontWeight: 'bold',
    width: 768,
    height: 768,
    color: '#fff',
    backgroundColor: '#000'
  },
  inner: {
    width: 320
  },
  bar: {
    margin: 0,
    border: 0,
    height: 12,
    animation: 'none',
    backgroundImage: gradient(90, colors.cyan, colors.magenta),
  }
}

export default Icon
