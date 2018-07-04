---
title: Box
---

# Box

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

All grid-styled components use [styled-system][system] for style props,
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

