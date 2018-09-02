
<img src='docs/logo.png' width='128' height='128' />

# Rebass Grid

Responsive React grid system built with
[styled-system][], with support for
[styled-components][sc] and
[emotion][emotion]

https://rebassjs.org/grid

[![Build Status][badge]][travis]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[badge]: https://img.shields.io/travis/rebassjs/grid.svg?style=flat-square
[travis]: https://travis-ci.org/rebassjs/grid

[downloads-badge]: https://img.shields.io/npm/dw/@rebass/grid.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@rebass/grid.svg?style=flat-square
[npm]: https://npmjs.com/package/@rebass/grid


## Getting Started

```sh
npm i @rebass/grid
```

```jsx
import React from 'react'
import { Flex, Box } from '@rebass/grid'

const App = () => (
  <Flex>
    <Box width={1/2} px={2}>
      Half width
    </Box>
    <Box width={1/2} px={2}>
      Half width
    </Box>
  </Flex>
)
```

### Emotion

*Or* for emotion, import `@rebass/grid/emotion`

```js
import { Flex, Box } from '@rebass/grid/emotion'
```

## Box

The Box component handles width, margin and padding.

```jsx
// Different widths at different breakpoints
<Box
  width={[
    1/2,
    1/3,
    1/4,
    1/6
  ]}
/>

// Fixed pixel width
<Box width={256} />

// CSS value width
<Box width='40em' />
```

```jsx
// Padding
<Box p={2} />

// Padding top
<Box pt={2} />

// Padding bottom
<Box pb={2} />

// Padding left
<Box pl={2} />

// Padding right
<Box pr={2} />

// x-axis padding (left and right)
<Box px={2} />

// y-axis padding (top and bottom)
<Box py={2} />
```

```jsx
// Margin
<Box m={2} />

// Margin top
<Box mt={2} />

// Margin bottom
<Box mb={2} />

// Margin left
<Box ml={2} />

// Margin right
<Box mr={2} />

// x-axis margin (left and right)
<Box mx={2} />

// y-axis margin (top and bottom)
<Box my={2} />
```

```jsx
// margin auto
<Box m='auto' />

// negative margins
<Box mx={-2} />
```

## Props

All @rebass/grid components use [styled-system][] for style props,
which pick up values from a [theme](#theming) and allow for responsive styles to be passed as [array values](#responsive-styles).

### `width` (number|string|array)

Sets width, where numbers `0-1` are percentage values, larger numbers are pixel values, and strings are raw CSS values with units.
Pass an array to set different widths at different breakpoints for
[responsive styles](#responsive-styles).

### Margin and Padding Props

Both margin and padding props accept numbers, strings, and arrays as values.
Using a number from `0-8` (i.e. an index of `theme.space`) will reference a step on the spacing scale.
Larger numbers are converted to pixel values.
Negative Numbers can be used to set negative margins and compensate for grid gutters.
Strings are passed directly for other valid CSS values.

Use array values to set different margin or padding values per breakpoint for
[responsive styles](#responsive-styles).

Margin and padding props follow a shorthand syntax for specifying direction.

- `m`:  margin
- `mt`: margin-top
- `mr`: margin-right
- `mb`: margin-bottom
- `ml`: margin-left
- `mx`: margin-left and margin-right
- `my`: margin-top and margin-bottom
- `p`:  padding
- `pt`: padding-top
- `pr`: padding-right
- `pb`: padding-bottom
- `pl`: padding-left
- `px`: padding-left and padding-right
- `py`: padding-top and padding-bottom

### `flex` (string|array)

Sets the `flex` property.

```jsx
<Box flex='1 1 auto' />
```

### `order` (number|string|array)

Sets the `order` property.

```jsx
<Box order={2} />
```

### `alignSelf` (string|array)

Sets the `align-self` property.

```jsx
<Box alignSelf='flex-end' />
```

### `css` (string|object)

Pass styles to styled-components or emotion.
This is useful as an escape hatch for one-off styles
or as a way to extend Rebass Grid components.

```jsx
<Box
  bg='blue'
  css={{
    borderRadius: '4px'
  }}
/>
```

## `Flex`

The Flex component extends the Box component and sets display flex.

```jsx
import React from 'react'
import { Flex, Box } from '@rebass/grid'

const App = props =>
  <Flex>
    <Box>Flex</Box>
    <Box>Box</Box>
  </Flex>
```

In addition to the Box component props,
Flex also includes the following:

- `alignItems` (string|array) sets `align-items`
- `justifyContent` (string|array) sets `justify-content`
- `flexDirection` (string|array) sets `flex-direction`
- `flexWrap` (string|array) sets `flex-wrap: wrap`


## Responsive Styles

Rebass Grid props accept arrays as values for mobile-first responsive styles,
where the first value is for all breakpoints, then each value after is for a min-width
media query from that breakpoint and up.

```jsx
// 100% below the smallest breakpoint,
// 50% from the next breakpoint and up,
// and 25% from the next breakpoint and up
<Box width={[ 1, 1/2, 1/4 ]} />

// responsive margin
<Box m={[ 1, 2, 3, 4 ]} />

// responsive padding
<Box p={[ 1, 2, 3, 4 ]} />
```

## Extending Components

Component can be extended with React or using styled-components or emotion.

### InlineFlex

```jsx
import React from 'react'
import { Flex } from '@rebass/grid'

const InlineFlex = props =>
  <Flex
    {...props}
    css={{
      display: 'inline-flex'
    }}
  />
```

```jsx
// styled-components example
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const InlineFlex = styled(Flex)`
  display: inline-flex;
`
```

### Max-Width Container

```jsx
import React from 'react'
import { Box } from '@rebass/grid'

const Container = props =>
  <Box
    {...props}
    mx='auto'
    css={{
      maxWidth: '1024px'
    }}
  />
```

```js
// styled-components example
import styled from 'styled-components'
import { Box } from '@rebass/grid'

const Container = styled(Box)`
  max-width: 1024px;
`
Container.defaultProps = {
  mx: 'auto'
}
```


### Auto Grid

This example creates components for a grid with set gutters where the columns expand to fill in the space.

```jsx
// Example
import React from 'react'
import { Flex, Box } from '@rebass/grid'

const Row = props => (
  <Flex
    {...props}
    mx={-3}
  />
)

const Column = props => (
  <Box
    {...props}
    px={3}
    flex='1 1 auto'
  />
)
```

## Changing the HTML element

Rebsas Grid components use the [`is` prop][is-prop] from [@rebass/components][] to change the underlying HTML element.

```jsx
<Box is='header' />
```

## Theming

Rebass Grid uses smart defaults, but to customize the values,
use the `ThemeProvider` component from styled-components or emotion.


```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from '@rebass/grid'

const theme = {
  space: [ 0, 6, 12, 18, 24 ],
  breakpoints: [ '32em', '48em', '64em' ]
}

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Box width={[1, 1/2, 1/4]} px={2}>Box with custom spacing scale and breakpoints</Box>
    </div>
  </ThemeProvider>
)
```

### Breakpoints

The Flex and Box components use a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
Breakpoints are hard-coded to the following min-widths: `40em`, `52em`, `64em`.

To customize, provide an array of string values that will be converted to media queries.

### Spacing Scale

Rebass Grid components' margin and padding props use a 4 step spacing scale to help
keep things aligned and keep layouts consistent.

The default scale is based on an 8px/powers-of-two grid: `[ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]`,
which helps keep spacing consistent and elements aligned even when nesting components.

## Styled Space

Rebass Grid also works with the optional [styled-space][] package.

```jsx
import React from 'react'
import { Flex, Box } from '@rebass/grid'
import Space from 'styled-space'

const App = () => (
  <Flex>
    <Space mx={3}>
      <h1>Hello</h1>
      <Box>Beep</Box>
    </Space>
  </Flex>
)
```

## Related

- [styled-space][]
- [styled-system][]
- [@rebass/components][]
- [Rebass](https://rebassjs.org/)
- [styled-components][sc]
- [emotion][emotion]

[styled-space]: https://github.com/rebassjs/grid/tree/master/styled-space
[sc]: https://github.com/styled-components/styled-components
[styled-system]: https://github.com/jxnblk/styled-system
[emotion]: https://github.com/emotion-js/emotion
[is-prop]: https://github.com/jxnblk/styled-system/tree/master/system-components#changing-the-underlying-html-element
[@rebass/components]: https://github.com/rebassjs/components

[MIT License](LICENSE.md)
