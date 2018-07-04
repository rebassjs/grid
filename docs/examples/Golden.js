export default `
<Flex>
  <Box p={2} width={(1 + Math.sqrt(5)) / 2 - 1}>
    <Heading
      my={4}
      fontSize={[ 6, 7 ]}>
      Golden
    </Heading>
    <Bar />
  </Box>
  <Box p={2} width={1 - ((1 + Math.sqrt(5)) / 2 - 1)}>
    <Heading
      my={4}
      fontSize={[ 6, 7 ]}>
      Ratio
    </Heading>
    <Bar />
  </Box>
</Flex>
`
