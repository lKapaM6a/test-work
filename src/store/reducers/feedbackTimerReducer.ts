import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'

export interface TimerTime {
  seconds: number
  minutes: number
}

// Define a type for the slice state
export interface TimerState {
  time: TimerTime
  initDate?: Date | null
}

// Define the initial state using that type
const initialState: TimerState = {
  time: {
    seconds: 0,
    minutes: 0
  },
}

export const time = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<TimerTime>) => {
      state.time = action.payload
    },
    setDate: (state, action:PayloadAction<Date | null>) => {
      state.initDate = action.payload
    }
  },
})

export const {setTimer, setDate} = time.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.timer

export default time.reducer