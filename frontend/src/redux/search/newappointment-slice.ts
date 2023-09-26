"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  value: false,
};

const newAppointmentSlice = createSlice({
  name: "newAppointment",
  initialState,
  reducers: {
    onItemSelected: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const itemSelected = (state: any) => state.newAppointment.value;
export const { onItemSelected } = newAppointmentSlice.actions;
export default newAppointmentSlice.reducer;
