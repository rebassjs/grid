
# Theming

Rebass Grid uses smart defaults, but to customize the values,
use the `ThemeProvider` component from styled-components or emotion.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from '@rebass/grid'

const App = () => (
  <ThemeProvider
    theme={{
      space: [ 0, 6, 12, 18, 24 ],
      breakpoints: [ '32em', '48em', '64em' ]
    }}>
    <div>
      <Box width={[1, 1/2, 1/4]} px={2}>Box with custom spacing scale and breakpoints</Box>
    </div>
  </ThemeProvider>
)
```

## Breakpoints

The Flex and Box components use a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
Breakpoints are hard-coded to the following min-widths: `40em`, `52em`, `64em`.

To customize, provide an array of string values that will be converted to media queries.

## Spacing Scale

Rebass Grid components' margin and padding props use a 4 step spacing scale to help
keep things aligned and keep layouts consistent.

The default scale is based on an 8px/powers-of-two grid: `[ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]`,
which helps keep spacing consistent and elements aligned even when nesting components.

