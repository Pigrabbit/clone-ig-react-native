import { AppTheme, DARK_MODE, LIGHT_MODE, ToggleAppModeAction } from './types';

const initialAppTheme: AppTheme = 'DARK_MODE';

export function themeReducer(
  state = initialAppTheme,
  action: ToggleAppModeAction,
) {
  switch(action.type) {
    case LIGHT_MODE:
      return DARK_MODE
    case DARK_MODE:
      return LIGHT_MODE
    default:
      return state
  }
}
