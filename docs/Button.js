import styled from 'styled-components'
import { colors, gradient } from './styles'

const Button = styled.a`
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .2em;
  text-decoration: none;
  margin: 0;
  padding: 12px;
  border: 0;
  color: #fff;
  background-color: ${colors.cyan};
  background-image: ${gradient(120, 'magenta', 'violet')};
  border-radius: 6px;
  appearance: none;

  &:hover {}
  &:focus {}
  &:active {}
`

export default Button
