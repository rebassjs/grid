import React from 'react'
import XRay from 'react-x-ray'
import { Flex, Box, Grid } from 'grid-styled'

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
        <Flex wrap>
          <Grid p={2} width={[ 1, 1/2, 1/3 ]}>Flex</Grid>
          <Grid p={2} width={[ 1, 1/2, 1/3 ]}>Grid</Grid>
          <Grid p={2} width={[ 1, null, 1/3 ]}>Grid</Grid>
        </Flex>
      </XRay>
    )
  }
}

export default App
