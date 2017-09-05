import React from 'react'
import { getContext } from 'recompose'
import PropTypes from 'prop-types'
import Box from './Box'

const Column = ({
  xs,
  sm,
  md,
  lg,
  xl,
  gridStyledGutter,
  ...props
}, context) => (
  <Box
    px={gridStyledGutter}
    w={getWidth({
      xs,
      sm,
      md,
      lg,
      xl
    })}
    {...props}
  />
)

const getColumn = n => (typeof n === 'number' && n >= 1) ? n / 12 : n

const getWidth = ({
  xs,
  sm,
  md,
  lg,
  xl
}) => [
  xs,
  sm,
  md,
  lg,
  xl
].map(getColumn)

Column.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
}

Column.defaultProps = {
  xs: 12,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  gridStyledGutter: 2
}

const hoc = getContext({
  gridStyledGutter: PropTypes.number
})

export default hoc(Column)
