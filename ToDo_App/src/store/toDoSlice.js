// toDoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { setInputValue, addTodo } = toDoSlice.actions;
export default toDoSlice.reducer;
