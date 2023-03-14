import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: [],
  todolistForm: {
    title: "",
    body: "",
  },
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
    setFormTodoList: (state, action) => {
      state.todolistForm = action.payload;
    },
  },
});

export const { setTodoList, setDeleteTodoItem, setFormTodoList } =
  todolist.actions;
export default todolist.reducer;
