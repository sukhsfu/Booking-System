"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  value: 0,
};

const providerIdSlice = createSlice({
  name: "providerIdSelected",
  initialState,
  reducers: {
    onProviderIdSelected: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const providerIdSelected = (state: any) =>
  state.providerIdSelected.value;
export const { onProviderIdSelected } = providerIdSlice.actions;
export default providerIdSlice.reducer;
