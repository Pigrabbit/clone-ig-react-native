import {
  CLEAR_TOAST_ACTION,
  SHOW_TOAST_ACTION,
  ToastAction,
  ToastMetaData,
} from './types';

export type ToastState = {
  isVisible: boolean;
} & ToastMetaData;

const initialToastState: ToastState = {
  isVisible: false,
  verticalPos: 'TOP',
  toastType: 'CONFIRM',
  message: '',
  duration: 0,
};

export function toastReducer(state = initialToastState, action: ToastAction) {
  switch (action.type) {
    case CLEAR_TOAST_ACTION:
      return {
        ...initialToastState,
        isVisible: false,
      };
    case SHOW_TOAST_ACTION:
      return {
        isVisible: true,
        ...action.payload,
      };
    default:
      return state;
  }
}
