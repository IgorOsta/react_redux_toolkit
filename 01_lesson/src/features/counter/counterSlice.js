import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //? increment action
    increment: (state) => {
      state.count += 1;
    },
    //? decrement action
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

//? WE nee to export the actions and the reducer 
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
