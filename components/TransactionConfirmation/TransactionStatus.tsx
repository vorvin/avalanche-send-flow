import React from 'react'

import { motion } from 'framer-motion'
import { touchableStyles } from '~/css/touchableStyles'

import { Box } from '../Box/Box'
import { Button } from '../Button/Button'
import { Spinner } from '../Spinner'
import { Checkmark } from '../icons/Checkmark'
import { Close } from '../icons/Close'

interface TransactionStatusProps {
  status: 'success' | 'failed' | 'pending'
  onViewOnExplorer: () => void
  onGoBack: () => void
}

const POPUP_TRANSITION_CONFIG = {
  initial: {
    scale: 0.3,
    opacity: 0,
    rotate: -15
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
      mass: 0.8
    }
  }
}

export function TransactionStatus({ status, onViewOnExplorer, onGoBack }: TransactionStatusProps) {
  if (status === 'pending') {
    return (
      <Box
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="20"
      >
        <Box
          as={motion.div}
          width="full"
          height="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white100"
        >
          <Spinner width={82} height={82} />
        </Box>

        <Box
          as="p"
          fontSize="20"
          fontWeight="heavy"
          fontFamily="rounded"
          color="white100"
          textAlign="center"
        >
          Confirming transaction...
        </Box>
      </Box>
    )
  }

  if (status === 'success') {
    return (
      <Box
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="16"
      >
        <Box
          as={motion.div}
          width="full"
          height="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="green60"
          {...POPUP_TRANSITION_CONFIG}
        >
          <Checkmark width={82} height={82} />
        </Box>

        <Box
          as="p"
          fontSize="20"
          fontWeight="heavy"
          fontFamily="rounded"
          color="white100"
          textAlign="center"
        >
          Transaction successful
        </Box>

        <Button
          as="button"
          fontFamily="rounded"
          background="blue60"
          transition="transform"
          paddingX="32"
          weight="bold"
          borderRadius="full"
          height="40"
          fontSize="16"
          fontWeight="bold"
          color="white100"
          className={touchableStyles({ active: 'shrink', hover: 'grow' })}
          onClick={onViewOnExplorer}
        >
          View on Explorer
        </Button>
      </Box>
    )
  }

  if (status === 'failed') {
    return (
      <Box
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="16"
      >
        <Box
          as={motion.div}
          width="full"
          height="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="red50"
          {...POPUP_TRANSITION_CONFIG}
        >
          <Close width={82} height={82} />
        </Box>

        <Box
          as="p"
          fontSize="20"
          fontWeight="heavy"
          fontFamily="rounded"
          color="white100"
          textAlign="center"
        >
          Transaction failed
        </Box>

        <Button
          as="button"
          fontFamily="rounded"
          background="red50"
          transition="transform"
          paddingX="32"
          weight="bold"
          borderRadius="full"
          height="40"
          fontSize="16"
          fontWeight="bold"
          color="white100"
          className={touchableStyles({ active: 'shrink', hover: 'grow' })}
          onClick={onGoBack}
        >
          Go back
        </Button>
      </Box>
    )
  }

  return null
}
