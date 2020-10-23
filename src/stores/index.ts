import { combineReducers } from 'redux'
import { postReducer } from './posts/reducers'

export const rootReducer = combineReducers({
  post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>
