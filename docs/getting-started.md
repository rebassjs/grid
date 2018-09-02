
# Getting Started

```sh
npm i @rebass/grid styled-components
```

```jsx
import React from 'react'
import { Box, Flex } from '@rebass/grid'

const App = props =>
  <Flex>
    <Box width={1/2} px={2}>
      Half width
    </Box>
    <Box width={1/2} px={2}>
      Half width
    </Box>
  </Flex>
```

## Emotion

To use Rebass Grid with emotion, import `@rebass/grid/emotion`

```js
import { Box, Flex } from '@rebass/grid/emotion'
```

