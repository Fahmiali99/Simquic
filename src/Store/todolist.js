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
    setDeleteTodoItem: (state, action) => {
      const idx = action.payload;
      state.todolist.splice(idx, 1);
    },
  },
});

export const { setTodoList, setDeleteTodoItem } = todolist.actions;
export default todolist.reducer;
