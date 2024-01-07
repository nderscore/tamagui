import { Heart } from '@tamagui/lucide-icons'
import { Button, TooltipSimple, YStack } from 'tamagui'

import { NextLink } from './NextLink'

export const SponsorButton = (props: { tiny?: boolean }) => {
  const el = (
    <Button
      theme="red"
      icon={
        <Heart
          style={{ marginBottom: -1 }}
          size={props.tiny ? 12 : 14}
          color="var(--red10)"
        />
      }
      als="center"
      elevation="$3"
      borderWidth={props.tiny ? 0 : 1}
      borderColor="$borderColor"
      size={props.tiny ? '$3' : '$4'}
      fontFamily="$silkscreen"
      bc="$color1"
      br="$10"
      circular={props.tiny ? true : false}
      chromeless={props.tiny ? true : false}
      accessibilityLabel="Support OSS development of Tamagui"
    >
      {props.tiny ? '' : 'Sponsor'}
    </Button>
  )
  return (
    <NextLink target="_blank" href="https://github.com/sponsors/natew">
      <YStack>
        {props.tiny ? (
          <TooltipSimple delay={0} restMs={25} label="Support OSS development of Tamagui">
            {el}
          </TooltipSimple>
        ) : (
          el
        )}
      </YStack>
    </NextLink>
  )
}
