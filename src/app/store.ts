import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
    devTools: process && process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
