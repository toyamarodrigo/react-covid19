import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/appSlice";

import { covidApi } from "./../services/covid19";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    app: appReducer,
    [covidApi.reducerPath]: covidApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(covidApi.middleware),
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
