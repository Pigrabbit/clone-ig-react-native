import { WIDNOW_HEIGHT } from 'constants/metrics';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

type VerticalPosType = 'TOP' | 'MIDDLE' | 'BOTTOM';
type ToastType = 'CONFIRM' | 'WARNING' | 'ERROR';

interface Props {
  verticalPos: VerticalPosType;
  message: string;
  type: ToastType;
}

const Toast: React.FC<Props> = ({ verticalPos, message, type }) => {
  const getHeight = (posProp: VerticalPosType): number => {
    switch (posProp) {
      case 'TOP':
        return WIDNOW_HEIGHT * 0.1;
      case 'MIDDLE':
        return WIDNOW_HEIGHT * 0.45;
      case 'BOTTOM':
        return WIDNOW_HEIGHT * 0.8;
    }
  };
  const getBackgroundColor = (toastTypeProps: ToastType): string => {
    switch (toastTypeProps) {
      case 'CONFIRM':
        return '#badc58';
      case 'WARNING':
        return '#f0932b';
      case 'ERROR':
        return '#eb4d4b';
    }
  };
  return (
    <Container
      height={getHeight(verticalPos)}
      backgroundColor={getBackgroundColor(type)}>
      <Content>{message}</Content>
    </Container>
  );
};

interface IStyledContainer {
  height: number;
  backgroundColor: string;
}

const Container = styled.View<IStyledContainer>`
  position: absolute;
  top: ${(props) => `${props.height}px`};
  left: 10%;
  width: 80%;
  height: ${WIDNOW_HEIGHT * 0.1};
  background-color: ${(props) => props.backgroundColor};
  border-color: gray;
  border-width: 1px;
  z-index: 9999;
  align-items: center;
  justify-content: center;
`;

const Content = styled.Text`
  font-size: 18px;
`

export default Toast;
