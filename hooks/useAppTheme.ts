import React, { useEffect, useRef } from "react";
import { getApp, useAppSelector } from "./redux";

type Return = React.MutableRefObject<HTMLDivElement | null>;

export const useAppTheme = (): Return => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isDarkTheme } = useAppSelector(getApp);

  const changeTheme = (isDark: boolean) => (): void => {
    if (!ref.current) return;

    const theme = isDark ? "dark" : "root";

    ref.current.setAttribute("data-theme", theme);
  };

  useEffect(changeTheme(isDarkTheme), [isDarkTheme]);

  return ref;
};
