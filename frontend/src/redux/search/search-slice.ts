"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  searchInput: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onSearchChange: (state, actions) => {
      state.searchInput = actions.payload;
    },
    onSearchClear: (state) => {
      state.searchInput = "";
    },
  },
});

export const selectSearchInput = (state: any) => state.search.searchInput;

export const { onSearchChange, onSearchClear } = searchSlice.actions;
export default searchSlice.reducer;
