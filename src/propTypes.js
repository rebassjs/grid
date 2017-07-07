import {
  oneOfType,
  number,
  string,
  array,
} from 'prop-types'

const responsivePropType = oneOfType([
  number,
  string,
  array
])

const propTypes = {
  width: responsivePropType,
  fontSize: responsivePropType,
  color: responsivePropType,
  bg: responsivePropType,
  m: responsivePropType,
  mt: responsivePropType,
  mr: responsivePropType,
  mb: responsivePropType,
  ml: responsivePropType,
  mx: responsivePropType,
  my: responsivePropType,
  p: responsivePropType,
  pt: responsivePropType,
  pr: responsivePropType,
  pb: responsivePropType,
  pl: responsivePropType,
  px: responsivePropType,
  py: responsivePropType,
}

export default propTypes
