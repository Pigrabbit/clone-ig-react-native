export type VerticalPosType = 'TOP' | 'MIDDLE' | 'BOTTOM';
export type ToastMessageType = 'CONFIRM' | 'WARNING' | 'ERROR';
export type ToastMetaData = {
  verticalPos: VerticalPosType;
  message: string;
  toastType: ToastMessageType;
  duration: number;
};

export const SHOW_TOAST_ACTION = 'toast/show';
export interface ShowToastAction {
  type: typeof SHOW_TOAST_ACTION;
  payload: ToastMetaData;
}

export const CLEAR_TOAST_ACTION = 'toast/clear';
export interface ClearToastAction {
  type: typeof CLEAR_TOAST_ACTION;
}

export type ToastAction = ShowToastAction | ClearToastAction;
