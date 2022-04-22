import React from "react";
import { MoonLoader } from "react-spinners";
import styles from "./Spinner.module.scss";

interface LoadingProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

export const Spinner = (props: LoadingProps): React.ReactElement => {
  return (
    <div className={styles.spinner}>
      <MoonLoader {...props} speedMultiplier={0.7} />
    </div>
  );
};
