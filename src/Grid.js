import styled from 'styled-components'
import Box from './Box'

const align = props => props.align || 'top'

const Grid = styled(Box)`
  display: inline-block;
  vertical-align: ${align};
`

export default Grid
