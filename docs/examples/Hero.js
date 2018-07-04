export default `
<Box p={3} width={[ 1, 2/3, 1/2 ]}>
  <Heading
    is='h1'
    my={4}
    fontSize={[ 6, 7 ]}>
    Grid Styled
  </Heading>
  <Bar />
  <Text
    my={4}
    fontSize={4}
    fontWeight='bold'>
    Responsive React grid system <br /> built with styled-components
  </Text>
  <Flex alignItems='center'>
    <Button
      href='https://github.com/jxnblk/grid-styled'
      children='GitHub'
    />
    <Box mx={1} />
    <pre>npm i grid-styled</pre>
  </Flex>
</Box>
`
