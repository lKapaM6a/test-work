import {configureStore} from '@reduxjs/toolkit'
import cityReducer from './reducers/cityReducer'
import feedbackTimerReducer from "./reducers/feedbackTimerReducer";
import modalsReducer from "./reducers/modalsReducer";

export const store = configureStore({
  reducer: {
    city: cityReducer,
    timer: feedbackTimerReducer,
    modals: modalsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch