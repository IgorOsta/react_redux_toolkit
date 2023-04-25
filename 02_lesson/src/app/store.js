import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSLice";

export const store = configureStore({
  //? A single reducer function that will be used as the root reducer, or an object of slice reducers
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
