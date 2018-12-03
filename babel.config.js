module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: []
}

if (process.env.NODE_ENV === 'emotion') {
  module.exports.plugins.push([
    "transform-rename-import",
    {
      "original": "^styled-components$",
      "replacement": "@emotion/styled"
    }
  ])
}
