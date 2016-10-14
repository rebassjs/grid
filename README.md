
# Grid Styled

Responsive React grid system built with [styled-components](https://github.com/styled-components/styled-components)

## Getting Started

```sh
npm i grid-styled
```

```js
import React from 'react'
import Grid from 'grid-styled'

const App = () => (
  <div>
    <Grid sm={1/2}>
      Half width
    </Grid>
    <Grid sm={1/2}>
      Half width
    </Grid>
  </div>
)

export default App
```

```js
// Different widths at different breakpoints
<Grid
  xs={1/2}
  sm={1/3}
  md={1/4}
  lg={1/6}
/>
```

## Props

- `xs`: (number) width as a fraction for all breakpoints
- `sm`: (number) width as a fraction for the small breakpoint and up
- `md`: (number) width as a fraction for the medium breakpoint and up
- `lg`: (number) width as a fraction for the large breakpoint and up

## Theming

Grid Styled has some smart defaults, but to customize the values,
use styled-components’ `ThemeProvider` component.

```js
import React from 'react'
import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider
    theme={{
      gutter: 48,
      breakpoints: {
        small: '32em',
        medium: '48em',
        large: '64em'
      }
    }}>
    <div>
      <Grid>Grid with custom gutter and breakpoints</Grid>
    </div>
  </ThemeProvider>
)
```

### Breakpoints

Grid components use a mobile-first responsive approach,
where any value set works from that breakpoint and wider.
Breakpoints are hard-coded to the following min-widths: `40em`, `52em`, `64em`.

To customize, provide an object with the following three keys: `small`, `medium`, `large`.
It's recommended to use ems for defining media queries.


### Gutter

All Grid components have 32px left and right padding.
To customize the grid gutter, pass a number to `theme.gutter` with the ThemeProvider component.

## Components

In addition to the `Grid` component, Grid Styled exports these other primitive helper components:

```js
import { Half, Third, Quarter } from 'grid-styled'
```

- `Half` - Grid component that spans oes half width at the small breakpoint
- `Third` - Grid component that spans oes one-third width at the small breakpoint
- `Quarter` - Grid component that spans oes one-quarter width at the medium breakpoint
- `GoldenA` - Grid component that spans the golden ratio a width at the medium breakpoint (where a / b == φ)
- `GoldenB` - Grid component that spans the golden ratio b width at the medium breakpoint

MIT License
