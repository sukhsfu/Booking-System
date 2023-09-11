"use client";
import { createSlice } from "@reduxjs/toolkit";
import { searchOptions } from "@/constants";

const initialState: any = {
  value: searchOptions[1].placeHolder,
};

const placeHolderSlice = createSlice({
  name: "placeHolder",
  initialState,
  reducers: {
    onPlaceHolderChange: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const selectPlaceHolder = (state: any) => state.placeHolder.value;
export const { onPlaceHolderChange } = placeHolderSlice.actions;
export default placeHolderSlice.reducer;
