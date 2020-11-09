export const LIGHT_MODE = 'LIGHT_MODE'
export const DARK_MODE = 'DARK_MODE'

export type AppTheme = 'LIGHT_MODE' | 'DARK_MODE'

export const TOGGLE_THEME_ACTION = 'TOGGLE_THEME_ACTION'
export interface ToggleAppModeAction {
  type: typeof TOGGLE_THEME_ACTION
  toggleTo: AppTheme
}