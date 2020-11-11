export const LIGHT_MODE = 'LIGHT_MODE';
export const DARK_MODE = 'DARK_MODE';

export type AppTheme = 'LIGHT_MODE' | 'DARK_MODE';

export const TOGGLE_THEME_ACTION = 'TOGGLE_THEME_ACTION';
export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME_ACTION;
  toggleTo: AppTheme;
}

export const FETCH_THEME_ACTION = 'FETCH_APP_THEME_ACTION';
export interface FetchThemeAction {
  type: typeof FETCH_THEME_ACTION;
  savedTheme: AppTheme;
}

export type ThemeAction = ToggleThemeAction | FetchThemeAction;

export function isAppThemeType(arg: any): arg is AppTheme {
  return arg === LIGHT_MODE || arg === DARK_MODE
}