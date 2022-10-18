import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./WeatherSlice";



export const store = configureStore({

  reducer: {

    users: userReducer,

  },

});



export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatcher = typeof store.dispatch;