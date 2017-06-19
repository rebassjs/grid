import styled from 'styled-components'
import Box from './Box'

const align = props => ({ verticalAlign: props.align || 'top' })

const Grid = styled(Box)([], {
  display: 'inline-block'
}, align)

export default Grid
