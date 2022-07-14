import { enableStaticRendering } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import { LocalStorage, STORAGE_KEY } from "../service/LocalStore";

export interface IApp {
  isDarkTheme: boolean;
}

function initialDarkTheme(): boolean {
  const getValue = LocalStorage.get(STORAGE_KEY.isDarkTheme);
  return typeof getValue === "boolean" ? getValue : false;
}

export class App implements IApp {
  isDarkTheme = initialDarkTheme();

  constructor() {
    enableStaticRendering(typeof window === "undefined");
    makeAutoObservable(this);
  }

  changeDarkTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    LocalStorage.set(STORAGE_KEY.isDarkTheme, this.isDarkTheme);
  }
}

export default new App();
