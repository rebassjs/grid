import styled from 'styled-components'
import { gradient } from './styles'

const hyphenate = str => ('' + str)
  .replace(/[A-Z]/g, '-$&')
  .toLowerCase()

const color = key => props => props[key]
  ? `${hyphenate(key)}:${props[key]};`
  : null

const grx = props => props.gradient
  ? `background-image:${gradient(...props.gradient)};`
  : null

const Color = styled.div`
  ${color('color')}
  ${color('backgroundColor')}
  ${grx}
`

export default Color
