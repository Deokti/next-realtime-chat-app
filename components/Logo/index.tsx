import React, { ReactElement } from "react";
import { RiGroupLine } from "react-icons/ri";
import styles from "./Logo.module.scss";

export const Logo = (): ReactElement => {
  return (
    <div className="d-flex align-center">
      <RiGroupLine className={styles.logo} size={28} />
      <h1 className={styles.title}>RC</h1>
    </div>
  );
};
