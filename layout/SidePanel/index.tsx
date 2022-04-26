import React, { ReactElement } from "react";
import cn from "classnames";
import styles from "./SidePanel.module.scss";
import { Logo } from "../../components/Logo";
import { DefaultDivProps } from "../../interfaces/extends.props";
import { Search } from "../../components/Search";
import { TEST_USERS } from "../../config/TEST_DATA";
import { User } from "../../components/User";

export const SidePanel = ({ ...props }: DefaultDivProps): ReactElement => {
  const { className, ...otherProps } = props;

  return (
    <div {...otherProps} className={cn(styles.sidepanel, className)}>
      <Logo />
      <Search className="mt-50 w100p" placeholder="Поиск " />

      <ul className={styles.users}>
        {TEST_USERS.map((user) => {
          return (
            <li key={user._id} className="mb-5">
              <User user={user} isSelected={user._id === "1"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
