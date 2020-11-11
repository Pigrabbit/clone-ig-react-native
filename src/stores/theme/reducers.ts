import {
  AppTheme,
  FETCH_THEME_ACTION,
  ThemeAction,
  TOGGLE_THEME_ACTION,
} from './types';

const initialAppTheme: AppTheme = 'LIGHT_MODE';

export function themeReducer(state = initialAppTheme, action: ThemeAction) {
  switch (action.type) {
    case FETCH_THEME_ACTION:
      return action.savedTheme;
    case TOGGLE_THEME_ACTION:
      return action.toggleTo;
    default:
      return state;
  }
}
