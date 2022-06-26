import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const switchSlice = createSlice({
    name: 'switch',
    initialState,
    reducers: {
        flip: (state) => {
            state.value = !(state.value);
        }, 
    },
});

// Action creators are generated for each case reducer function
export const { flip } = switchSlice.actions;
export default switchSlice.reducer;