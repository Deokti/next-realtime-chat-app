import React, { ReactElement } from "react";
import { DefaultDivProps } from "../../interfaces/extends.props";
import styles from "./Chat.module.scss";
import cn from "classnames";

export const Chat = (props: DefaultDivProps): ReactElement => {
  const { className, ...otherProps } = props;

  return (
    <div {...otherProps} className={cn(styles.chat, className)}>
      CHAT
    </div>
  );
};
