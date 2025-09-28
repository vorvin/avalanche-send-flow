'use client'

import React from 'react'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Box } from '../Box/Box'

export function Navbar() {
  const router = useRouter()

  return (
    <Box
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="20"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={() => {
          router.push('/')
        }}
      >
        <Image src="/avalanche.svg" alt="navbar-logo" width={46} height={46} />
      </Box>

      <ConnectButton />
    </Box>
  )
}
