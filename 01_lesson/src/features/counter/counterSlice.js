import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  //? reducer object, containing the actions
  reducers: {
    //? increment action
    increment: (state) => {
      state.count += 1;
    },
    //? decrement action
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

//? WE nee to export the actions and the reducer
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
