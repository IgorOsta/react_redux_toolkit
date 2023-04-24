import { configureStore } from "@reduxjs/toolkit";
import postREd from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: postREd,
});
