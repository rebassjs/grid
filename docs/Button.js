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
  transition-property: transform, color;
  transition-timing-function: ease-out;
  transition-duration: .05s;

  &:hover {
    color: #000;
    background-image: ${gradient(120, 'lime', 'cyan')};
    transform: scale(${17/16});
  }

  &:focus {
    outline: none;
    transform: scale(${17/16});
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px ${colors.cyan}
;
  }

  &:active {
    transform: scale(${15/16});
  }
`

export default Button
