import { configureStore } from '@reduxjs/toolkit';
import stepSlice from './stepsSlice';

export const store = configureStore({
    reducer: {
        step: stepSlice,
    },
});