import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../redux/WeatherSlice'

export const Store = configureStore({
  reducer: {
    users:userReducer
  }
})

export default Store
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatcher = typeof Store.dispatch