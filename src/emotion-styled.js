import styled from 'react-emotion'

// Imported from https://github.com/emotion-js/grid-emotion
const stylePatched = function(Component, opts) {
  const thing = styled(Component, opts)
  return (...styles) => {
    const ret = thing(...styles)
    // allows usage of styled-components extend
    ret.extend = (...moreStyles) => {
      return styled(ret)(...moreStyles)
    }
    return ret
  }
}

export { stylePatched as default }
