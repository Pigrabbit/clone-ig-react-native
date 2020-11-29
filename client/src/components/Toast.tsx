import { WIDNOW_HEIGHT, WINDOW_WIDTH } from 'constants/metrics';
import React, { useEffect, useRef } from 'client/node_modules/react';
import { Animated } from 'client/node_modules/react-native';
import { useDispatch, useSelector } from 'client/node_modules/react-redux';
import { RootState } from 'stores';
import { clearToast } from 'stores/toast/actions';
import { ToastState } from 'stores/toast/reducers';
import { ToastMessageType, VerticalPosType } from 'stores/toast/types';
import styled from 'client/node_modules/styled-components/native';

const Toast: React.FC = () => {
  const toast = useSelector<RootState, ToastState>(
    (rootState) => rootState.toast,
  );
  const { verticalPos, message, toastType, duration, isVisible } = toast;
  const dispatch = useDispatch();
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number) => {
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
    }).start(() => dispatch(clearToast()));
  };

  useEffect(() => {
    if (!isVisible) return;
    fadeIn(duration);
  }, [isVisible]);

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

  const getBackgroundColor = (toastType: ToastMessageType): string => {
    switch (toastType) {
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
      pointerEvents="none"
      height={getHeight(verticalPos)}
      backgroundColor={getBackgroundColor(toastType)}
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
  align-self: center;
  max-width: ${WINDOW_WIDTH * 0.8};
  max-height: ${WIDNOW_HEIGHT * 0.1};
  padding: 12px 16px;
  background-color: ${(props) => props.backgroundColor};
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
