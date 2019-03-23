module.exports = {
  presets: [
    '@babel/env',
    '@babel/react'
  ],
  plugins: [
    'babel-plugin-styled-components',
  ],
  env: {
    emotion: {
      plugins: [
        [
          "transform-rename-import",
          {
            "original": "^styled-components$",
            "replacement": "@emotion/styled"
          }
        ]
      ]
    }
  }
}
