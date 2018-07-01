export default `
<Box p={3} width={[ 1, 2/3, 1/2 ]}>
  <h1 className='h0'>Grid Styled</h1>
  <Bar />
  <p className='h3 bold'>
    Responsive React grid system <br /> built with styled-components
  </p>
  <Flex alignItems='center'>
    <Button
      href='https://github.com/jxnblk/grid-styled'
      children='GitHub'
    />
    <Box mx={1} />
    <pre className='pre'>npm i grid-styled</pre>
  </Flex>
</Box>
`
