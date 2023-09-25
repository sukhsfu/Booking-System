"use client";
import { createSlice } from "@reduxjs/toolkit";
import { searchOptions } from "@/constants";

const initialState: any = {
  value: {
    placeHolderText: searchOptions[1].placeHolder,
    searchId: searchOptions[1].searchId,
  },
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

export const placeHolderText = (state: any) =>
  state.placeHolder.value.placeHolderText;
export const placeHolderSearchId = (state: any) =>
  state.placeHolder.value.searchId;
export const { onPlaceHolderChange } = placeHolderSlice.actions;
export default placeHolderSlice.reducer;
