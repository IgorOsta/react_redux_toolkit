import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    title: "Learning Redux ToolKit",
    content: "I.ve heard good things",
    date: sub(new Date(), { minutes: 10 }).toString(),
    userId: "0",
  },
  {
    id: 2,
    title: "Slices...",
    content: "The more I say the more I want pizza.",
    date: sub(new Date(), { minutes: 5 }).toString(),
    userId: "1",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});
export const selectPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
