export default `
<Color
  style={{
    minHeight: '70vh'
  }}
  color='#fff'
  backgroundColor='#000'>
  <Box px={3} py={4}>
    <Flex flexWrap='wrap' mx={-3} py={4}>
      <Box p={3} width={[ 1/2, 1/3 ]}>
        <Bar />
        <h2 className='h2 xh0'>Negative</h2>
      </Box>
      <Box p={3} width={[ 1/2, 1/3 ]}>
        <Bar />
        <h2 className='h2'>Space</h2>
      </Box>
    </Flex>
  </Box>
</Color>
`
