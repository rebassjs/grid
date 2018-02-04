import React from 'react'

const CSS = ({ css }) => React.createElement('style', {
  dangerouslySetInnerHTML: {
    __html: css
  }
})

CSS.defaultProps = {
  css: `
    * {box-sizing:border-box}
    body {
      font-family: system-ui, sans-serif;
      margin: 0;
      padding: 0;
      color: #000;
      background-color: #fff;
    }
    a {color:inherit }
    .m0 {margin:0}
    .pre {
      font-family: 'SF Mono', Menlo, monospace;
      font-size: 14px;
      margin: 0;
    }
    .prism-code {tab-size:2}
  `
}

export default CSS
