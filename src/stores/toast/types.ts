export type VerticalPosType = 'TOP' | 'MIDDLE' | 'BOTTOM';
export type ToastMessageType = 'CONFIRM' | 'WARNING' | 'ERROR';

export const SHOW_TOAST_ACTION = 'toast/show';
interface ShowToastAction {
  type: typeof SHOW_TOAST_ACTION;
  payload: {
    verticalPos: VerticalPosType;
    message: string;
    toastType: ToastMessageType;
    duration: number;
  };
}

export const CLEAR_TOAST_ACTION = 'toast/clear';
interface ClearToastAction {
  type: typeof CLEAR_TOAST_ACTION;
}

export type ToastAction = ShowToastAction | ClearToastAction;
