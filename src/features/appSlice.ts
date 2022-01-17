import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../app/store";

const initialState = {};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const selectForm = (state: RootState) => state.app;
export default appSlice.reducer;
