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
      <Path d="M4 6 2 7" stroke={color} />
      <Path d="M10 6h4" stroke={color} />
      <Path d="m22 7-2-1" stroke={color} />
      <Rect width="16" height="16" x="4" y="3" rx="2" stroke={color} />
      <Path d="M4 11h16" stroke={color} />
      <Path d="M8 15h.01" stroke={color} />
      <Path d="M16 15h.01" stroke={color} />
      <Path d="M6 19v2" stroke={color} />
      <Path d="M18 21v-2" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'BusFront'

export const BusFront = memo<IconProps>(themed(Icon))
