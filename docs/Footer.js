import React from 'react'
import {
  Flex,
  Box,
} from '../src'
import BaseButton from './BaseButton'

const Btn = BaseButton.withComponent('a')

const Footer = () => (
  <Flex align='center'>
    <Btn href='http://jxnblk.com'>
      Made by Jxnblk
    </Btn>
    <Box mx='auto' />
    <Btn href='https://travis-ci.org/jxnblk/rebass'>
      <img
        src='https://img.shields.io/travis/jxnblk/rebass/master.svg'
        style={{
          display: 'block',
          margin: 0
        }}
      />
    </Btn>
  </Flex>
)

export default Footer
