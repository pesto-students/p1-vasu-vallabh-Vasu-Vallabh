import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./features/switchSlice";

export const store = configureStore({
    reducer: {
        switch: switchReducer
    },
});