import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../app/store";
import { AppState } from "../model/covid";

const initialState: AppState = {
  selectedCountry: {
    label: "Global",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    selectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const selectForm = (state: RootState) => state.app;

export const { selectedCountry } = appSlice.actions;

export default appSlice.reducer;
