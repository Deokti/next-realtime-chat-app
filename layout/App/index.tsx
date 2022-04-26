import React, { ReactElement } from "react";
import HeadTitle from "../../components/HeadTitle";
import { TEST_USER } from "../../config/TEST_DATA";
import { Chat } from "../Chat";
import { Header } from "../Header";
import { SidePanel } from "../SidePanel";
import styles from "./App.module.scss";

export const App = (): ReactElement => {
  return (
    <div className={styles.app}>
      <HeadTitle title="Главная страница" />
      <Header
        className={styles.header}
        avatar={{ alt: TEST_USER.username, src: TEST_USER.avatar }}
      />
      <SidePanel className={styles.sidepanel} />
      <Chat className={styles.chat} />
    </div>
  );
};
