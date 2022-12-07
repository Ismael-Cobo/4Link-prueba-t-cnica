import { Alergens } from '@/models'
import { configureStore } from '@reduxjs/toolkit'
import { MenuInt } from '../models/Menu'
import { MenuSlice } from './state/MenuSlice'
import { alergensSlice } from './state/AlergensSlice'

export const store = configureStore({
  reducer: {
    menu: MenuSlice.reducer,
    alergens: alergensSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
