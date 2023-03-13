import { configureStore } from "@reduxjs/toolkit";
import inbox from "./inbox";
import todolist from "./todolist";

export const store = configureStore({
  reducer: {
    inbox: inbox,
    todolist: todolist,
  },
});
