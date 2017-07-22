
# Grid Styled

Responsive React grid system built with [styled-components](https://github.com/styled-components/styled-components)

http://jxnblk.com/grid-styled

[![Build Status](https://travis-ci.org/jxnblk/grid-styled.svg?branch=master)](https://travis-ci.org/jxnblk/grid-styled)

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

```jsx
// Display inline-block grid
import { Grid } from 'grid-styled'

<div>
  <Grid width={1/2}>Half</Grid>
  <Grid width={1/2}>Half</Grid>
</div>
```


## `<Box />`

The Box component handles width, margin and padding.

### Props

#### `width` (number|string|array)

Sets width, where numbers `0-1` are percentage values, larger numbers are pixel values, and strings are raw CSS values with units.
Pass an array to set different widths at different breakpoints for
[responsive styles](#responsive-styles).

#### Margin and Padding Props

Both margin and padding props accept numbers, strings, and arrays as values.
Using a number from `0-4` will reference a step on the spacing scale.
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

#### `is` (Component|string)

Sets the underlying HTML element.

```jsx
<Box is='section' />
```

## `<Flex />`

The Flex component extends the Box component and sets display flex.
It also includes the following props:

- `align` (string|array) sets `align-items`
- `justify` (string|array) sets `justify-content`
- `direction` (string|array) sets `flex-direction`
- `wrap` (boolean|array) sets `flex-wrap: wrap`
- `column` (boolean) shortcut for `flex-direction: column`


## `<Grid />`

The Grid component extends the Box component and sets display inline-block
for an alternative to flexbox layout.


## Responsive Styles

Most props accept arrays as values for mobile-first responsive styles,
where the first value is for all breakpoints, then each value after is for a min-width
media query from that breakpoint and up.
The Box component uses [styled-system](https://github.com/jxnblk/styled-system) for these props.

```jsx
// 100% below the smallest breakpoint,
// 50% from the next breakpoint and up,
// and 25% from the next breakpoint and up
<Box w={[ 1, 1/2, 1/4 ]} />

// responsive margin
<Box m={[ 1, 2, 3, 4 ]} />

// responsive padding
<Box p={[ 1, 2, 3, 4 ]} />
```

## Extending Components

Using styled-components, you can customize any of the grid-styled components' styles.


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
  margin-left: auto;
  margin-right: auto;
`
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
use styled-components’ `ThemeProvider` component.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider
    theme={{
      space: [ 0, 6, 12, 18, 24 ],
      breakpoints: [ 32, 48, 64 ]
    }}>
    <div>
      <Grid>Grid with custom spacing scale and breakpoints</Grid>
    </div>
  </ThemeProvider>
)
```

### Breakpoints

The Grid component uses a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
Breakpoints are hard-coded to the following min-widths: `40em`, `52em`, `64em`.

To customize, provide an array of numbers that will be converted to ems.


### Spacing Scale

Grid Styled components' margin and padding props use a 4 step spacing scale to help
keep things aligned and keep layouts consistent.

The default scale is based on an 8px/powers-of-two grid: `[ 0, 8, 16, 32, 64 ]`,
which helps keep spacing consistent and elements aligned even when nesting components.

### Related

- [Rebass](https://github.com/jxnblk/rebass)
- [styled-system](https://github.com/jxnblk/styled-system)
- [styled-components](https://github.com/styled-components/styled-components)

[MIT License](LICENSE.md)
