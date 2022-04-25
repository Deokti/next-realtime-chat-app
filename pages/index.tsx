import styles from "../styles/Home.module.scss";
import { FC, ReactElement } from "react";
import Login from "./login";
import "@fontsource/roboto";
import { useAppTheme } from "../hooks/useAppTheme";
import { User } from "../components/User";

const Home: FC = (): ReactElement => {
  const ref = useAppTheme();

  return (
    <main className={styles.app} ref={ref}>
      <Login />
      {/* <User
        user={{ _id: "1", avatar: "", isOnline: false, username: "Каин" }}
      /> */}
    </main>
  );
};

export default Home;
