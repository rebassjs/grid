---
title: Getting Started
---

# Getting Started

```sh
npm i grid-styled styled-components
```

```jsx
import React from 'react'
import { Box, Flex } from 'grid-styled'

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

To use Grid Styled with emotion, import `grid-styled/emotion`

```js
import { Box, Flex } from 'grid-styled/emotion'
```

