import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [],
};

export const todolist = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.todolist = action.payload;
    },
  },
});

export const { setTodoList } = todolist.actions;
export default todolist.reducer;
