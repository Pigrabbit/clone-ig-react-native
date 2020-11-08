export const LIGHT_MODE = 'LIGHT_MODE'
export const DARK_MODE = 'DARK_MODE'

export type AppTheme = 'LIGHT_MODE' | 'DARK_MODE'

export interface ToggleAppModeAction {
  type: AppTheme
}