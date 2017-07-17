import React from 'react'
import Grid from './Grid'

const Half = props => <Grid {...props} width={[ 1, 1/2 ]} />
Half.displayName = 'Half'

export default Half
