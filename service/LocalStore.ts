export enum STORAGE_KEY {
  isDarkTheme = "isDarkTheme",
}

export class LocalStorage {
  static set(key: STORAGE_KEY, value: unknown): void {
    if (LocalStorage.IS_SERVER()) return "" as any;

    localStorage.setItem(key, JSON.stringify(value));
  }

  static get<T = unknown>(key: STORAGE_KEY): T {
    if (LocalStorage.IS_SERVER()) return "" as any;
    return JSON.parse(localStorage.getItem(key) || "0");
  }

  static IS_SERVER(): boolean {
    return typeof window === "undefined";
  }
}
