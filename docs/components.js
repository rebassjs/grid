import React from 'react'
import styled, { keyframes } from 'styled-components'
import { space, fontSize, fontWeight } from 'styled-system'
import { Head } from 'mdx-go'
import { Arrow } from 'reline'
import { Box, Flex } from '../src'

export const colors = {
  cyan: '#0ff',
  violet: '#80f',
  magenta: '#f0f',
  lime: '#8f0',
}

const cx = key => colors[key] || key

export const gradient = (n, from, to) => `linear-gradient(${n}deg, ${cx(from)}, ${cx(to)})`

export const Layout = props => props.location.pathname === '/' ? props.children :
  <React.Fragment>
    <Box
      px={4}
      py={5}
      mx='auto'
      css={{
        maxWidth: '768px'
      }}>
      {props.children}
    </Box>
  </React.Fragment>

export const Root = props =>
  <React.Fragment>
    <Head>
      <title>Rebass Grid</title>
      <meta name='description' content='Responsive React grid system built with styled-system, with support for styled-components and emotion' />
      <meta name='twitter:description' content='Responsive React grid system built with styled-system, with support for styled-components and emotion' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@jxnblk' />
      <meta name='twitter:title' content='Rebass Grid' />
      <meta name='twitter:image' content='https://rebassjs.org/grid/logo.png' />
    </Head>
    <Layout {...props} />
  </React.Fragment>

export const Button = styled('a')`
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
  padding: 12px;
  border: 0;
  color: #fff;
  background-color: ${colors.cyan};
  background-image: ${gradient(120, 'magenta', 'violet')};
  border-radius: 6px;
  appearance: none;
  transition-property: transform, color;
  transition-timing-function: ease-out;
  transition-duration: .05s;

  &:hover {
    color: #000;
    background-image: ${gradient(120, 'lime', 'cyan')};
    transform: scale(${17/16});
  }

  &:focus {
    outline: none;
    transform: scale(${17/16});
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px ${colors.cyan};
  }

  &:active {
    transform: scale(${15/16});
  }
`

export const BaseButton = styled('button')`
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  margin: 0;
  padding: 16px;
  color: inherit;
  background-color: ${props => props.active ? '#000' : 'transparent'};
  border: 0;
  appearance: none;
`

export const ArrowButton = styled(({ right, left, ...props}) =>
  <button {...props}>
    <Arrow left={left} />
  </button>
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 16px;
  color: inherit;
  background-color: transparent;
  border: 0;
  appearance: none;
`

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

export const Bar = styled.hr`
  margin: 0;
  border: 0;
  height: 3px;
  background-image: ${gradient(90, colors.cyan, colors.magenta)};
  transform-origin: 0 0;
  animation-name: ${grow};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`

const hyphenate = str => ('' + str)
  .replace(/[A-Z]/g, '-$&')
  .toLowerCase()

const color = key => props => props[key]
  ? `${hyphenate(key)}:${props[key]};`
  : null

const grx = props => props.gradient
  ? `background-image:${gradient(...props.gradient)};`
  : null

export const Color = styled.div`
  ${color('color')}
  ${color('backgroundColor')}
  ${grx}
`

export const Heading = styled('div')([],
  space,
  fontSize
)

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4
}

export const Text = styled('div')([],
  space,
  fontSize,
  fontWeight,
)

