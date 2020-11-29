import { combineReducers } from 'client/node_modules/redux'
import { postReducer } from './posts/reducers'
import { themeReducer } from './theme/reducers'
import { toastReducer } from './toast/reducers'

export const rootReducer = combineReducers({
  post: postReducer,
  theme: themeReducer,
  toast: toastReducer,
})

export type RootState = ReturnType<typeof rootReducer>
