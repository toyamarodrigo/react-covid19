import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../app/store";
import { AppState, CountryOption } from "../model/covid";

const initialState: AppState = {
  selectedCountry: {
    label: "Global",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    selectedCountry: (state, action: PayloadAction<CountryOption>) => {
      state.selectedCountry = action.payload;
    },
  },
});

export const selectForm = (state: RootState) => state.app;

export const { selectedCountry } = appSlice.actions;

export default appSlice.reducer;
