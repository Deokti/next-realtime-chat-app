import styles from "../styles/Home.module.scss";
import { FC, ReactElement } from "react";
import "@fontsource/roboto";
import { useAppTheme } from "../hooks/useAppTheme";
import { App } from "../layout/App";

const Home: FC = (): ReactElement => {
  const ref = useAppTheme();

  return (
    <main className={styles.app} ref={ref}>
      <App />
    </main>
  );
};

export default Home;
