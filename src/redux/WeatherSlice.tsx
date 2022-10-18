import { createSlice } from "@reduxjs/toolkit";
import { City } from "../interfaces";

type InitialStateType = {
  wishList: City[],
  selectCity: {}
}

const initialState: InitialStateType ={
  wishList: [],
  selectCity: {}
}

const WeatherSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchCity: (state,action) => {
        state.selectCity=action.payload
    },
    addUser: (state,action) => {
      state.wishList = [...state.wishList,action.payload]
    },
    deleteUser: (state, action) => {
      const indexPos = state.wishList.findIndex((value) => value.id === action.payload)
      state.wishList.splice(indexPos,1)
    }
  }
})

export default WeatherSlice.reducer;
export const {addUser, deleteUser} = WeatherSlice.actions