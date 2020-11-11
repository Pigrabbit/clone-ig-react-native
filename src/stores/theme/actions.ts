import {
  AppTheme,
  FetchThemeAction,
  FETCH_THEME_ACTION,
  ToggleThemeAction,
  TOGGLE_THEME_ACTION,
} from './types';

export function toggleTheme(toggleTo: AppTheme): ToggleThemeAction {
  return {
    type: TOGGLE_THEME_ACTION,
    toggleTo,
  };
}

export function fetchTheme(savedTheme: AppTheme): FetchThemeAction {
  return {
    type: FETCH_THEME_ACTION,
    savedTheme,
  };
}
