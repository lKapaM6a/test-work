import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
export interface ModalsState {
  cityModal: boolean
  feedbackModal: boolean
  successModal: boolean
}

// Define the initial state using that type
const initialState: ModalsState = {
  cityModal: false,
  feedbackModal: false,
  successModal: false
}

export const modals = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setCityModal: (state, action: PayloadAction<boolean>) => {
      state.cityModal = action.payload
    },
    setFeedbackModal: (state, action: PayloadAction<boolean>) => {
      state.feedbackModal = action.payload
    },
    setSuccessModal: (state, action: PayloadAction<boolean>) => {
      state.successModal = action.payload
    },
  },
})

export const {setCityModal, setFeedbackModal, setSuccessModal} = modals.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.modals

export default modals.reducer