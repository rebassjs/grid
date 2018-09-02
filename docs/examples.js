const Hero = `
<Box p={3} width={[ 1, 2/3, 1/2 ]}>
  <Heading
    is='h1'
    my={4}
    fontSize={[ 6, 7 ]}>
    Rebass Grid
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
      is={Link}
      href='/getting-started'
      children='Documentation'
    />
    <Box mx={2} />
    <Button
      href='https://github.com/rebassjs/grid'
      children='GitHub'
    />
    <Box mx={2} />
    <pre>npm i @rebass/grid</pre>
  </Flex>
</Box>
`
const Space = `
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

const Grid = `
<Text fontWeight='bold'>
  <Flex flexWrap='wrap'>
    <Box px={2} py={2} width={1/2}>
      <Bar />
      1/2
    </Box>
    <Box px={2} py={2} width={1/2}>
      <Bar />
      1/2
    </Box>

    <Box px={2} py={2} width={1/3}>
      <Bar />
      1/3
    </Box>
    <Box px={2} py={2} width={1/3}>
      <Bar />
      1/3
    </Box>
    <Box px={2} py={2} width={1/3}>
      <Bar />
      1/3
    </Box>

    <Box px={2} py={2} width={1/4}>
      <Bar />
      1/4
    </Box>
    <Box px={2} py={2} width={1/4}>
      <Bar />
      1/4
    </Box>
    <Box px={2} py={2} width={1/4}>
      <Bar />
      1/4
    </Box>
    <Box px={2} py={2} width={1/4}>
      <Bar />
      1/4
    </Box>

    <Box px={2} py={2} width={1/5}>
      <Bar />
      1/5
    </Box>
    <Box px={2} py={2} width={1/5}>
      <Bar />
      1/5
    </Box>
    <Box px={2} py={2} width={1/5}>
      <Bar />
      1/5
    </Box>
    <Box px={2} py={2} width={1/5}>
      <Bar />
      1/5
    </Box>
    <Box px={2} py={2} width={1/5}>
      <Bar />
      1/5
    </Box>

    <Box px={2} py={2} width={1/6}>
      <Bar />
      1/6
    </Box>
    <Box px={2} py={2} width={1/6}>
      <Bar />
      1/6
    </Box>
    <Box px={2} py={2} width={1/6}>
      <Bar />
      1/6
    </Box>
    <Box px={2} py={2} width={1/6}>
      <Bar />
      1/6
    </Box>
    <Box px={2} py={2} width={1/6}>
      <Bar />
      1/6
    </Box>
    <Box px={2} py={2} width={1/6}>
      <Bar />
      1/6
    </Box>
  </Flex>
</Text>
`

const Golden = `
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

const Negative = `
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

const Consistent = `
<Flex flexWrap='wrap'>
  <Box p={3} width={[ 1, 1/2 ]}>
    <Bar />
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Consistent</Heading>
  </Box>
  <Box p={3} width={[ 1, 1/2 ]}>
    <Bar />
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Flexible</Heading>
  </Box>
</Flex>
`

const Aligned = `
<Flex alignItems='baseline' justifyContent='space-around'>
  <Box p={2}>
    <Heading fontSize={[ 5, 6, 7 ]}>Baseline</Heading>
    <Bar />
  </Box>
  <Box p={2}>
    <Heading>Aligned</Heading>
  </Box>
</Flex>
`

const Flexbox = `
<Flex>
  <Box p={2}>
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Flex</Heading>
    <Bar />
  </Box>
  <Box p={2} ml='auto'>
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Box</Heading>
    <Bar />
  </Box>
</Flex>
`

const Auto = `
<Flex>
  <Box flex='1 1 auto' p={2}>
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Auto</Heading>
    <Bar />
  </Box>
  <Box flex='1 1 auto' p={2}>
    <Heading my={4} fontSize={[ 5, 6, 7 ]}>Auto</Heading>
    <Bar />
  </Box>
</Flex>
`

const RasterSysteme = `
<Flex flexDirection='column'>
  <Box px={2} width={[ 2/3, 1/2 ]}>
    <Heading my={4} fontSize={[ 5, 6 ]}>Raster</Heading>
    <Bar />
  </Box>
  <Box px={2} width={[ 2/3, 1/2 ]}>
    <Heading my={4} fontSize={[ 5, 6 ]}>Systeme</Heading>
  </Box>
</Flex>
`

const Movement = `
<Flex
  flexWrap='wrap'
  alignItems='flex-end'
  justifyContent='space-around'>
  <Box p={2}>
    <Box py={6}>
      <Heading fontSize={[ 6, 7 ]}>Don’t</Heading>
    </Box>
    <Bar />
  </Box>
  <Box p={2}>
    <Box py={2}>
      <Heading>Repeat Yourself</Heading>
    </Box>
    <Bar />
  </Box>
</Flex>
`

const Offset = `
<Text fontWeight='bold'>
  <Flex>
    <Box width={1/4} ml='25%' px={2} py={2}>
      <Bar />
      Offset Grid
    </Box>
    <Box width={1/4} mr='25%' px={2} py={2}>
      <Bar />
      1/4
    </Box>
  </Flex>
  <Flex>
    <Box width={1/4} px={2} py={2}>
      <Bar />
      1/4
    </Box>
    <Box width={1/4} px={2} py={2}>
      <Bar />
      1/4
    </Box>
    <Box width={1/4} px={2} py={2}>
      <Bar />
      1/4
    </Box>
    <Box width={1/4} px={2} py={2}>
      <Bar />
      1/4
    </Box>
  </Flex>
</Text>
`

export const examples = [
  Hero,
  Space,
  Grid,
  Golden,
  Negative,
  Consistent,
  Aligned,
  Flexbox,
  Auto,
  RasterSysteme,
  Movement,
  Offset,
]
