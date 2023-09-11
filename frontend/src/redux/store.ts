"use client";

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/search-slice";
import placeHolderReducer from "./search/placeHolder-slice";
import newappointmentReducer from "./search/newappointment-slice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    placeHolder: placeHolderReducer,
    newAppointment: newappointmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
