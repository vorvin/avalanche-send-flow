import { Token as TokenType } from '~/utils/types'

import { Box } from '../Box/Box'

interface TokenProps {
  token?: TokenType | null
}

export function Token({ token }: TokenProps) {
  return token ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="42"
      height="42"
      borderRadius="full"
      boxShadow="tokenImage"
    >
      <Box
        as="img"
        src={token.logo}
        alt="token"
        width="42"
        height="42"
        borderRadius="full"
        userSelect="none"
      />
    </Box>
  ) : (
    <Box
      borderWidth="1"
      borderStyle="solid"
      borderColor="seperatorTertiaryBackground"
      background="fillQuaternary"
      borderRadius="full"
      width="42"
      height="42"
      minWidth="42"
      minHeight="42"
    />
  )
}
