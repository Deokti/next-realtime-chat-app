import styles from "../styles/Home.module.scss";
import { FC, ReactElement, useEffect, useRef } from "react";
import { App } from "../layout/App";
import app from "../store/app";
import { observer } from "mobx-react-lite";

const Home: FC = observer((): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isDarkTheme } = app;

  // TODO: Поискать возможность изменить данный код, т.к. смотрится не очень
  const changeThemeAuto = (isDark: boolean) => (): void => {
    if (!ref.current) return;

    const theme = isDark ? "dark" : "root";

    ref.current.setAttribute("data-theme", theme);
  };

  useEffect(changeThemeAuto(isDarkTheme), [isDarkTheme]);

  return (
    <main className={styles.app} ref={ref}>
      <App />
    </main>
  );
});

export default Home;
