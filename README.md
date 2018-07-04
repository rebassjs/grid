
<img src='docs/logo.png' width='128' height='128' />

# Grid Styled

Responsive React grid system built with
[styled-system][system], with support for
[styled-components][sc] and
[emotion][emotion]

https://jxnblk.com/grid-styled

[![Build Status][badge]][travis]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[badge]: https://img.shields.io/travis/jxnblk/grid-styled.svg?style=flat-square
[travis]: https://travis-ci.org/jxnblk/grid-styled

[downloads-badge]: https://img.shields.io/npm/dw/grid-styled.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/grid-styled.svg?style=flat-square
[npm]: https://npmjs.com/package/grid-styled


## Getting Started

```sh
npm i grid-styled
```

```jsx
import React from 'react'
import { Flex, Box } from 'grid-styled'

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

*Or* for emotion, import `grid-styled/emotion`

```js
import { Flex, Box } from 'grid-styled/emotion'
```

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


## `<Box />`

The Box component handles width, margin and padding.

### Props

All grid-styled components use [styled-system][system] for style props,
which pick up values from a [theme](#theming) and allow for responsive styles to be passed as [array values](#responsive-styles).

#### `width` (number|string|array)

Sets width, where numbers `0-1` are percentage values, larger numbers are pixel values, and strings are raw CSS values with units.
Pass an array to set different widths at different breakpoints for
[responsive styles](#responsive-styles).

#### Margin and Padding Props

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

#### `flex` (string|array)

Sets the `flex` property.

```jsx
<Box flex='1 1 auto' />
```

#### `order` (number|string|array)

Sets the `order` property.

```jsx
<Box order={2} />
```

#### `alignSelf` (string|array)

Sets the `align-self` property.

```jsx
<Box alignSelf='flex-end' />
```

## `<Flex />`

The Flex component extends the Box component and sets display flex.
It also includes the following props:

- `alignItems` (string|array) sets `align-items`
- `justifyContent` (string|array) sets `justify-content`
- `flexDirection` (string|array) sets `flex-direction`
- `flexWrap` (string|array) sets `flex-wrap: wrap`


## Responsive Styles

Most props accept arrays as values for mobile-first responsive styles,
where the first value is for all breakpoints, then each value after is for a min-width
media query from that breakpoint and up.
The Box component uses [styled-system][system] for these props.

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

Using styled-components or emotion, you can customize any of the grid-styled components' styles.

### InlineFlex

```js
// Example
import styled from 'styled-components'
import { Flex } from 'grid-styled'

const InlineFlex = styled(Flex)`
  display: inline-flex;
`
```

### Max-Width Container

```js
// Example
import styled from 'styled-components'
import { Box } from 'grid-styled'

const Container = styled(Box)`
  max-width: 1024px;
`
Container.defaultProps = {
  mx: 'auto'
}
```


### Auto Grid

Components can also be extended with React.
This example creates components for a grid with set gutters where the columns expand to fill in the space.

```jsx
// Example
import React from 'react'
import { Flex, Box } from 'grid-styled'

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

## Theming

Grid Styled uses smart defaults, but to customize the values,
use the `ThemeProvider` component from styled-components or emotion.


```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from 'grid-styled'

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

**Breakpoints**

The Flex and Box components use a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
Breakpoints are hard-coded to the following min-widths: `40em`, `52em`, `64em`.

To customize, provide an array of string values that will be converted to media queries.

**Spacing Scale**

Grid Styled components' margin and padding props use a 4 step spacing scale to help
keep things aligned and keep layouts consistent.

The default scale is based on an 8px/powers-of-two grid: `[ 0, 4, 8, 16, 32, 64, 128, 256, 512 ]`,
which helps keep spacing consistent and elements aligned even when nesting components.

## Styled Space

Grid Styled works nicely together with [styled-space][ssp]:

```jsx
import React from 'react'
import { Flex, Box } from 'grid-styled'
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

- [styled-space][ssp]
- [styled-system][system]
- [Rebass](https://github.com/jxnblk/rebass)
- [styled-components][sc]
- [emotion][emotion]

[ssp]: https://github.com/jxnblk/grid-styled/tree/master/styled-space
[sc]: https://github.com/styled-components/styled-components
[system]: https://github.com/jxnblk/styled-system
[emotion]: https://github.com/emotion-js/emotion

[MIT License](LICENSE.md)
