import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" stroke={color} />
      <Path d="m9 15-1-1" stroke={color} />
      <Path d="m15 15 1-1" stroke={color} />
      <Path
        d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
        stroke={color}
      />
      <Path d="m8 19-2 3" stroke={color} />
      <Path d="m16 19 2 3" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'TrainFront'

export const TrainFront = memo<IconProps>(themed(Icon))
