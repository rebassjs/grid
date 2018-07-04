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
        <Heading
          my={5}
          fontSize={[ 6, 7 ]}>
          Negative
        </Heading>
      </Box>
      <Box p={3} width={[ 1/2, 1/3 ]}>
        <Bar />
        <Heading my={4}>Space</Heading>
      </Box>
    </Flex>
  </Box>
</Color>
`
