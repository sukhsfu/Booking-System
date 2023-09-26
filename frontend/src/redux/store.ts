"use client";

import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/search-slice";
import placeHolderReducer from "./search/placeHolder-slice";
import newappointmentReducer from "./search/newappointment-slice";
import providerIdReducer from "./search/appointmentdata-slice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    placeHolder: placeHolderReducer,
    newAppointment: newappointmentReducer,
    providerIdSelected: providerIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
