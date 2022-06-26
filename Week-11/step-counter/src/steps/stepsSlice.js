import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 10,
}

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: { // business logic
    increment: (state) => {
      state.value++;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, reset } = stepSlice.actions;
export default stepSlice.reducer;