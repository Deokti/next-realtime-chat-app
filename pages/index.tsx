import styles from "../styles/Home.module.scss";
import { FC, ReactElement } from "react";
import Login from "./login";
import "@fontsource/roboto";
import { useAppTheme } from "../hooks/useAppTheme";

const Home: FC = (): ReactElement => {
  const ref = useAppTheme();

  return (
    <main className={styles.app} ref={ref}>
      <Login />
    </main>
  );
};

export default Home;
