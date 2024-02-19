import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./toDoSlice"

export const Store = configureStore({
    reducer: {
        inputReducer,
    },
});