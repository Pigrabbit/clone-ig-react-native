import { combineReducers } from 'redux'
import { postReducer } from './posts/reducers'
import { themeReducer } from './theme/reducers'

export const rootReducer = combineReducers({
  post: postReducer,
  theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>
