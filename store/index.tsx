import { combineReducers, configureStore } from "@reduxjs/toolkit";

import app from "./reducers/app";

const rootReducer = combineReducers({ app });

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const configStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = configStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configStore>;
export type AppDispath = AppStore["dispatch"];
