import { createSlice } from '@reduxjs/toolkit'
import { Alergen } from '../../models/Alergen'

const initialState: Alergen[] = []
export const alergensSlice = createSlice({
  name: 'alergens',
  initialState: {
    alergens: initialState,
    isOpen: false,
  },
  reducers: {
    openAlergens: (state) => {
      state.isOpen = true
    },
    closeAlergens: (state) => {
      state.isOpen = false
    },
    loadAllAlergens: (state, { payload }) => {
      state.alergens = payload
    },
  },
})

export const { openAlergens, closeAlergens, loadAllAlergens } = alergensSlice.actions
