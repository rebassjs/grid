
# Grid Styled

Responsive React grid system built with [styled-components](https://github.com/styled-components/styled-components)

## Getting Started

```sh
npm i grid-styled
```

```js
import React from 'react'
import { Grid } from 'grid-styled'

const App = () => (
  <div>
    <Grid width={1/2}>
      Half width
    </Grid>
    <Grid width={1/2}>
      Half width
    </Grid>
  </div>
)

export default App
```

```js
// Different widths at different breakpoints
<Grid
  width={[
    1/2,
    1/3,
    1/4,
    1/6
  ]}
/>
```

```jsx
// Flexbox
import { Flex, Grid } from 'grid-styled'
```

## Components

- Grid
- Box
- Flex
- Half, Third, Quart, Golden.A, Golden.B

### `<Grid />`
### `<Box />`
### `<Flex />`
### `<Half />`


## Props

### `width` (number|string|array)

Sets width, where numbers `0-1` are percentage values, larger numbers are pixel values, and strings are raw CSS values with units.
Pass an array to set different widths at different breakpoints.

### Margin and Padding

Both margin and padding props accept numbers or strings.
Using a number from `0-4` will reference a step on the spacing scale.
Larger numbers are converted to pixel values.
Negative Numbers can be used to set negative margins and compensate for grid gutters.
Strings are passed directly for other valid CSS values.

Margin and padding props follow a shorthand syntax for specifying direction.

- `m`: margin
- `mt`: margin-top
- `mr`: margin-right
- `mb`: margin-bottom
- `ml`: margin-left
- `mx`: margin-left and margin-right
- `my`: margin-top and margin-bottom
- `p`: padding
- `pt`: padding-top
- `pr`: padding-right
- `pb`: padding-bottom
- `pl`: padding-left
- `px`: padding-left and padding-right
- `py`: padding-top and padding-bottom

## Theming

Grid Styled has some smart defaults, but to customize the values,
use styled-components’ `ThemeProvider` component.

```js
import React from 'react'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider
    theme={{
      space: [
        0, 6, 12, 18, 24
      ],
      breakpoints: [
        32,
        48,
        64
      ]
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


MIT License
