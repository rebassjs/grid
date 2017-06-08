import React from 'react'
import Grid from 'grid-styled-grid'

export const Half = props => <Grid {...props} width={[ 1, 1/2 ]} />
export const Third = props => <Grid {...props} width={[ 1, 1/3 ]} />
export const Quarter = props => <Grid {...props} width={[ 1, 1/4 ]} />

const Fractions = {
  Half,
  Third,
  Quarter
}

export default Fractions
