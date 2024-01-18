import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import TaskSlice from "./reducers/task";

export const store = configureStore({
  reducer: {
    [TaskSlice.name]: TaskSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
