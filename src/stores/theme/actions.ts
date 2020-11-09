import { AppTheme, ToggleAppModeAction, TOGGLE_THEME_ACTION } from "./types";

export function toggleTheme(toggleTo: AppTheme): ToggleAppModeAction {
  return {
    type: TOGGLE_THEME_ACTION,
    toggleTo
  }
}