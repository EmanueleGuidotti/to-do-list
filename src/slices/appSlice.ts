import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<any>) => {
      state.todos = action.payload.todos;
    },
  },
});

export const { setTodos } = appSlice.actions;

export default appSlice.reducer;
