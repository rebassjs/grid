import React from 'react'
import {
  Flex,
  Box,
} from '../src'
import styled from 'styled-components'
import { SidebarLayout } from '@compositor/x0/components'
import sortBy from 'lodash.sortby'
import {
  colors,
  BaseButton,
  Tweet,
} from './_components'

const Btn = BaseButton.withComponent('a')

const Main = styled.div`
  min-height: 100vh;
`

const Footer = () => (
  <Flex alignItems='center'>
    <Box mx='auto' />
    <Btn href='https://github.com/jxnblk/grid-styled'>
      GitHub
    </Btn>
    <Btn href='https://jxnblk.com'>
      Made by Jxnblk
    </Btn>
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

const nav = [
  'index',
  'getting-started',
  'Box',
  'Flex',
  'responsive',
  'theming',
  'styled-space',
]

const sortNav = routes => sortBy(routes, route => nav.indexOf(route.name))
  .map(route => ({
    ...route,
    name: route.name === 'index' ? 'Home' : route.name
  }))

class App extends React.Component {
  state = {
    index: 0,
    xray: false,
    update: fn => this.setState(fn)
  }

  render () {
    const { Component, ...props } = this.props
    const index = props.location.pathname === '/'
    const Layout = index ? Main : SidebarLayout
    const routes = sortNav(props.routes)

    return (
      <React.Fragment>
        <Layout
          {...props}
          title='Grid Styled'
          routes={routes}>
          <Component
            {...props}
            {...this.state}
          />
        </Layout>
        <Footer />
        <Keyboard {...props} />
        <GA />
        <Twitter />
      </React.Fragment>
    )
  }
}


export default App
