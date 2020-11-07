import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { assets, IconType } from 'constants/assets';

interface Props {
  iconName: IconType;
  onPress: () => void;
  width?: number;
  height?: number;
  tintColor?: string | null;
}

const TouchableIcon: React.FC<Props> = ({
  onPress,
  iconName,
  width,
  height,
  tintColor = '',
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        width={width}
        height={height}
        style={{ tintColor }}
        source={assets[iconName]}
      />
    </TouchableOpacity>
  );
};

const Icon = styled.Image`
  width: ${(props) => (props.width ? `${props.width}px` : '36px')};
  height: ${(props) => (props.height ? `${props.height}px` : '36px')};
  margin: 0 5px;
`;

export default TouchableIcon;
