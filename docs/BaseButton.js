import React from 'react'
import styled from 'styled-components'

const BaseButton = styled.button`
  font-family: inherit;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: .2em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  margin: 0;
  padding: 16px;
  color: inherit;
  background-color: ${props => props.active ? '#000' : 'transparent'};
  border: 0;
  appearance: none;
`

export default BaseButton
