
import React from 'react'
import { compose, withState } from 'recompose'
import styled, { ThemeProvider } from 'styled-components'
import classnames from 'classnames'
import Grid, { Half, Third, Quarter } from '../src/Grid'
import CarbonAd from './CarbonAd'
import TweetButton from './TweetButton'

const Pad = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`

// Demo box
const Box = styled(Pad)`
  font-weight: bold;
  box-shadow: inset 0 0 0 1px var(--green);
`

const flip = (v = 1/2) => Math.random() < v

const demo = length => props => Array.from({ length }).map((n, i) => (
  <Grid
    key={i}
    className={classnames({ 'hilite': flip(1/6) })}
    {...(props[i] || props)}>
    <Box>
      Grid
    </Box>
  </Grid>
))

const App = ({
  gutter,
  grid,
  setGutter,
  setGrid
}) => {
  const theme = {
    gutter
  }

  const toggleGrid = () => setGrid(!grid)

  const css = [
    grid ? 'body{ background-image: linear-gradient(transparent 7px, var(--green) 7px); background-size: 8px 8px; }' : ''
  ].join('')

  return (
    <ThemeProvider theme={theme}>
      <div onClick={toggleGrid}>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <header className='mt5 mb5'>
          <Grid
            align='middle'
            md={2/3}
            className='hilite'>
            <h1 className='h1 xh0'>Grid Styled</h1>
            <p className='h3 bold'>
              Responsive React grid system built with <a href='https://github.com/styled-components/styled-components'>styled-components</a>.
            </p>
            <p>
                <a className='bold'
                  href='https://github.com/jxnblk/grid-styled'>GitHub</a>
            </p>
          </Grid>
          <Grid
            align='middle'
            md={1/3}>
            <Pad>
              <CarbonAd />
            </Pad>
          </Grid>
          <Grid>
            <Pad>
              <TweetButton
                text='Grid Style: responsive React grid system built with style-components'
              />
            </Pad>
          </Grid>
        </header>
        <main>
          <section id='demo'>
            <div>
              {demo(2)({ sm: 1/2 })}
            </div>
            <div>
              {demo(4)({ sm: 1/2, md: 1/4 })}
            </div>
            <div>
              {demo(8)({ sm: 1/2, md: 1/8 })}
            </div>
            <div>
              {demo(2)([
                { sm: 1/4, md: 1/8 },
                { sm: 3/4, md: 7/8 }
              ])}
            </div>
            <div>
              {demo(2)([
                { sm: 1/4 },
                { sm: 3/4 }
              ])}
            </div>
            <div>
              {demo(2)([
                { sm: 1/2, md: 3/8 },
                { sm: 1/2, md: 5/8 }
              ])}
            </div>
            <div>
              {demo(2)([
                { sm: 1/2 },
                { sm: 1/2 }
              ])}
            </div>
            <div>
              {demo(2)([
                { sm: 1/2, md: 5/8 },
                { sm: 1/2, md: 3/8 }
              ])}
            </div>
            <div>
              {demo(2)([
                { sm: 3/4 },
                { sm: 1/4 }
              ])}
            </div>
            <div>
              {demo(2)([
                { sm: 3/4, md: 7/8 },
                { sm: 1/4, md: 1/8 }
              ])}
            </div>
            <div>
              {demo(3)({ sm: 1/3 })}
            </div>
            <div>
              {demo(6)({ sm: 1/2, md: 1/6 })}
            </div>
          </section>
        </main>
        <footer>
          <Grid>
            <Pad>
              <ul>
                <li>
                  <a href='https://github.com/jxnblk/grid-styled'>GitHub</a>
                </li>
                <li>
                  <a href='http://jxnblk.com'>Made by Jxnblk</a>
                </li>
              </ul>
            </Pad>
          </Grid>
        </footer>
      </div>
    </ThemeProvider>
  )
}

const hoc = compose(
  withState('gutter', 'setGutter', 32),
  withState('grid', 'setGrid', false),
)

export default hoc(App)

