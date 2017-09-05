import React from 'react'
import { withContext } from 'recompose'
import PropTypes from 'prop-types'
import Flex from './Flex'

const Row = ({
  gutter,
  ...props
}) => (
  <Flex
    wrap
    mx={-gutter}
    {...props}
  />
)

Row.defaultProps = {
  gutter: 2
}

const hoc = withContext(
  {
    gridStyledGutter: PropTypes.number
  },
  props => ({
    gridStyledGutter: props.gutter
  })
)

export default hoc(Row)
