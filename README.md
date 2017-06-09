
# Grid Styled

Responsive React grid system built with [styled-components](https://github.com/styled-components/styled-components)

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
Pass an array to set different widths at different breakpoints.

#### Margin and Padding Props

Both margin and padding props accept numbers or strings.
Using a number from `0-4` will reference a step on the spacing scale.
Larger numbers are converted to pixel values.
Negative Numbers can be used to set negative margins and compensate for grid gutters.
Strings are passed directly for other valid CSS values.

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


## `<Flex />`

The Flex component extends the Box component and sets display flex.
It also includes the following props:

- `align`
- `justify`
- `order`
- `wrap`
- `column`


## `<Grid />`

The Grid component extends the Box component and sets display inline-block
for an alternative to flexbox layout.


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

The default scale is based on powers of two: `[ 0, 8, 16, 32, 64 ]`


MIT License
