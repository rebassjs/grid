---
title: Flex
---

# Flex

The Flex component extends the Box component and sets display flex.

```jsx
import React from 'react'
import { Flex, Box } from 'grid-styled'

const App = props =>
  <Flex>
    <Box>Flex</Box>
    <Box>Box</Box>
  </Flex>
```

## Props

In addition to the Box component props,
Flex also includes the following:

- `alignItems` (string|array) sets `align-items`
- `justifyContent` (string|array) sets `justify-content`
- `flexDirection` (string|array) sets `flex-direction`
- `flexWrap` (string|array) sets `flex-wrap: wrap`
