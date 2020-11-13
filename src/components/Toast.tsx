import { WIDNOW_HEIGHT } from 'constants/metrics';
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

type VerticalPosType = 'TOP' | 'MIDDLE' | 'BOTTOM';
type ToastType = 'CONFIRM' | 'WARNING' | 'ERROR';

interface Props {
  verticalPos: VerticalPosType;
  message: string;
  type: ToastType;
  duration: number;
}

// TODO: connect Toast component to global redux store
// let Toast appear when TOAST/XXX action has dispatched
const Toast: React.FC<Props> = ({ verticalPos, message, type, duration }) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const showToast = (duration: number) => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start(() => fadeOut(2 * duration));
  };

  const fadeOut = (duration: number): void => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    showToast(duration);
  }, []);

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
    <AnimatedContainer
      height={getHeight(verticalPos)}
      backgroundColor={getBackgroundColor(type)}
      opacity={fadeAnimation}>
      <Content>{message}</Content>
    </AnimatedContainer>
  );
};

interface IStyledContainer {
  height: number;
  backgroundColor: string;
  opacity: number;
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
  opacity: ${(props) => props.opacity};
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Content = styled.Text`
  font-size: 18px;
`;

export default Toast;
