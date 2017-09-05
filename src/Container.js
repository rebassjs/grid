import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Box from './Box'

const px = n => typeof n === 'number' ? n + 'px' : n

const Container = styled(Box)`
  max-width: ${props => px(props.maxWidth)};
`

Container.defaultProps = {
  maxWidth: 1024,
  mx: 'auto',
  px: 2
}

Container.propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default Container
