import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, title: "Learning Redux ToolKit", content: "I.ve heard good things" },
  {
    id: 2,
    title: "Slices...",
    content: "The more I say the more I want pizza.",
  },
];
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});
export const  {postAdded} = postSlice.actions;
export default postSlice.reducer;
