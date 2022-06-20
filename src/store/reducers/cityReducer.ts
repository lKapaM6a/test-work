import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

// Define a type for the slice state
export interface CityState {
  city: string
}

// Define the initial state using that type
const initialState: CityState = {
  city: ''
}

export const city = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    }
  },
})

export const {setCity} = city.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.city

export default city.reducer