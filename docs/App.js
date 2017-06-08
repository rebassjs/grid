import React from 'react'
import XRay from 'react-x-ray'
import Box from 'box-styled'
import Grid from 'grid-styled'

class App extends React.Component {
  render () {
    return (
      <XRay
        color='#0ff'
        backgroundColor='#000'>
        <h1>hello</h1>
        <Box p={2}>Box p2</Box>
        <div>
          <Grid p={2} width={1/2}>Grid</Grid>
          <Grid p={2} width={1/2}>Grid</Grid>
        </div>
        <Box mx={-2}>
          <Grid p={2} width={[ 1, 1/2, 1/4 ]}>Grid</Grid>
          <Grid p={2} width={[ 1, 1/2, 1/4 ]}>Grid</Grid>
          <Grid p={2} width={[ 1, 1/2, 1/4 ]}>Grid</Grid>
          <Grid p={2} width={[ 1, 1/2, 1/4 ]}>Grid</Grid>
        </Box>
      </XRay>
    )
  }
}

export default App
