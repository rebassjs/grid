export default `
<Flex flexWrap='wrap' alignItems='center'>
  <Box p={4} width={[1, 2/3, null, 1/2 ]}>
    <Bar />
    <Text
      my={4}
      fontSize={[ 4, 5 ]}
      fontWeight='bold'>
      “White space is to be regarded as an active element, not a passive background.”
    </Text>
  </Box>
  <Box
    p={2}
    ml='auto'
    width={160}
    flex='none'>
    <span>Jan Tschichold</span>
  </Box>
</Flex>
`
