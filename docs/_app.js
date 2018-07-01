import React from 'react'
import {
  Flex,
  Box,
} from '../src'
import styled from 'styled-components'
import { connect } from 'refunk'
import {
  colors,
  BaseButton,
  ArrowButton,
  Tweet,
} from './_components'

const dec = state => ({ index: state.index - 1 })
const inc = state => ({ index: state.index + 1 })
const toggle = key => state => ({ [key]: !state[key] })

const Btn = BaseButton.withComponent('a')

const Header = ({
  update,
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
      onClick={e => update(toggle('xray'))}
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

const Main = styled.div`
  min-height: 100vh;
`

const Footer = () => (
  <Flex alignItems='center'>
    <Btn href='http://jxnblk.com'>
      Made by Jxnblk
    </Btn>
    <Box mx='auto' />
    <Btn href='https://travis-ci.org/jxnblk/rebass'>
      <img
        src='https://img.shields.io/travis/jxnblk/rebass/master.svg'
        style={{
          display: 'block',
          margin: 0
        }}
      />
    </Btn>
  </Flex>
)

const GA = () => React.createElement('script', {
  dangerouslySetInnerHTML: {
    __html: `(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");`
  }
})

const Twitter = () => React.createElement('script', {
  dangerouslySetInnerHTML: {
    __html: `window.twttr = (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
t = window.twttr || {};
if (d.getElementById(id)) return t;
js = d.createElement(s);
js.id = id;
js.src = "https://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js, fjs);
t._e = [];
t.ready = function(f) {
t._e.push(f);
};
return t;
}(document, "script", "twitter-wjs"));`
  }
})

class Keyboard extends React.Component {
  componentDidMount () {
    const { update } = this.props
    document.body.addEventListener('keydown', e => {
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
    return false
  }
}

const App = connect(({
  children,
  Component,
  ...props
}) =>
  <div>
    <Header {...props} />
    <Main>
      <Component {...props} />
    </Main>
    <Footer />
    <Keyboard {...props} />
    <GA />
    <Twitter />
  </div>
)

App.defaultProps = {
  index: 0,
  xray: false
}

export default App
