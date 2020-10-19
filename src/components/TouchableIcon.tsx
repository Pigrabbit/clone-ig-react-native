import React from 'react'
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import {assets, IconType} from '../constants/assets'

export interface TouchableIconProps {
  iconName: IconType
  onPress: () => void
}

const TouchableIcon: React.FC<TouchableIconProps> = (props) => {
  const {onPress, iconName} = props

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon source={assets[iconName]} />
    </TouchableOpacity>
  )
}

const Icon = styled.Image`
  width: 36px;
  height: 36px;
  margin: 0 5px;
`

export default TouchableIcon
