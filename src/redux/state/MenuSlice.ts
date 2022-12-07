import { createSlice } from '@reduxjs/toolkit'
import { MenuInt } from '../../models/Menu'

export const MenuSlice = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
  },
  reducers: {
    loadAllMenu: (state, { payload }) => {
      state.menu = payload
    },
  },
})

export const { loadAllMenu } = MenuSlice.actions
