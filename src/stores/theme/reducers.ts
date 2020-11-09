import { AppTheme, DARK_MODE, LIGHT_MODE, ToggleAppModeAction, TOGGLE_THEME_ACTION } from './types';

const initialAppTheme: AppTheme = 'DARK_MODE';

export function themeReducer(
  state = initialAppTheme,
  action: ToggleAppModeAction,
) {
  switch(action.type) {
    case TOGGLE_THEME_ACTION:
      return action.toggleTo
    default:
      return state
  }
}
