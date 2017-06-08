import test from 'ava'
import GS from './src'

test('exports components', t => {
  t.is(typeof GS, 'object')
  t.is(typeof GS.Grid, 'function')
  t.is(typeof GS.Box, 'function')
  t.is(typeof GS.Flex, 'function')
  t.is(typeof GS.Half, 'function')
  t.is(typeof GS.Third, 'function')
  t.is(typeof GS.Quarter, 'function')
  t.is(typeof GS.Golden.A, 'function')
  t.is(typeof GS.Golden.B, 'function')
})
