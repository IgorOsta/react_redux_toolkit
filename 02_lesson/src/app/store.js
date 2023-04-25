import { configureStore } from "@reduxjs/toolkit";
import posrREd from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: posrREd,
  
});
