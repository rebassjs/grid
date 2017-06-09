import React from 'react'
import styled from 'styled-components'
import { Arrow } from 'reline'
import BaseButton from './BaseButton'

const ArrowButton = ({ right, left, ...props}) => (
  <BaseButton {...props}>
    <Arrow left={left} />
  </BaseButton>
)

export default ArrowButton
