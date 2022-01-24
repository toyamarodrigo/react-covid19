import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../app/store";
import { AppState, CountryOption } from "../model/covid";

const initialState: AppState = {
  selectedCountry: {
    label: "Global",
    value: {
      Country: "",
      CountryCode: "",
      Slug: "",
      NewConfirmed: 0,
      TotalConfirmed: 0,
      NewDeaths: 0,
      TotalDeaths: 0,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: new Date().toISOString(),
    },
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
