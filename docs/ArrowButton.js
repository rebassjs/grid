import React from 'react'
import styled from 'styled-components'
import { Arrow } from 'reline'

const Base = ({ right, left, ...props}) => (
  <button {...props}>
    <Arrow left={left} />
  </button>
)

const ArrowButton = styled(Base)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 16px;
  color: inherit;
  background-color: transparent;
  border: 0;
  appearance: none;
`

export default ArrowButton
