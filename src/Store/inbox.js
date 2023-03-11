import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inbox: [],
};

export const inbox = createSlice({
  name: "inbox",
  initialState,
  reducers: {
    setInbox: (state, action) => {
      state.inbox = action.payload;
    },
  },
});

export const { setInbox } = inbox.actions;
export default inbox.reducer;
