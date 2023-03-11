import { configureStore } from "@reduxjs/toolkit";
import inbox from "./inbox";

export const store = configureStore({
  reducer: {
    inbox: inbox,
  },
});
