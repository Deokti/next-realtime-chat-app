import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalStorage, STORAGE_KEY } from "../../service/LocalStore";

interface IApp {
  isDarkTheme: boolean;
  isLoading: boolean;
}

const getBaseValueDarkTheme = (): boolean => {
  const getValue = LocalStorage.get(STORAGE_KEY.isDarkTheme);
  const isBool = typeof getValue === "boolean" ? getValue : false;
  return isBool;
};

const initialState: IApp = {
  isDarkTheme: getBaseValueDarkTheme(),
  isLoading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    onDarkTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      LocalStorage.set(STORAGE_KEY.isDarkTheme, state.isDarkTheme);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default appSlice.reducer;
