import {
  ClearToastAction,
  CLEAR_TOAST_ACTION,
  ShowToastAction,
  SHOW_TOAST_ACTION,
  ToastMetaData,
} from './types';

export function showToast({
  verticalPos,
  message,
  toastType,
  duration,
}: ToastMetaData): ShowToastAction {
  return {
    type: SHOW_TOAST_ACTION,
    payload: {
      verticalPos,
      message,
      toastType,
      duration,
    },
  };
}

export function clearToast(): ClearToastAction {
  return {
    type: CLEAR_TOAST_ACTION,
  };
}
