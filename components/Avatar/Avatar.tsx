import { useAvatar } from '~/hooks/useAvatar'

import { Box } from '../Box/Box'

interface AvatarProps {
  addressOrEnsName?: string
}

const DEFAULT_AVATAR = {
  color: '#FFB35A',
  emoji: '🤠'
}

export function Avatar({ addressOrEnsName }: AvatarProps) {
  const { data: avatar } = useAvatar({ addressOrEnsName })

  return avatar ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="42"
      height="42"
      minWidth="42"
      minHeight="42"
      borderRadius="full"
      boxShadow="tokenImage"
    >
      <Box
        as="img"
        src={avatar}
        alt="token"
        width="42"
        height="42"
        borderRadius="full"
        userSelect="none"
      />
    </Box>
  ) : (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="42"
      width="42"
      minWidth="42"
      minHeight="42"
      borderRadius="full"
      style={{ background: DEFAULT_AVATAR.color }}
      boxShadow="avatar"
    >
      <Box as="p" fontSize="26" fontWeight="bold" userSelect="none">
        {DEFAULT_AVATAR.emoji}
      </Box>
    </Box>
  )
}
