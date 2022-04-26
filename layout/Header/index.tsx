import React, { ReactElement } from "react";
import styles from "./Header.module.scss";
import cn from "classnames";
import { Avatar } from "@mui/material";
import { DefaultDivProps } from "../../interfaces/extends.props";

interface HeaderProps extends DefaultDivProps {
  avatar?: {
    alt: string;
    src: string;
  };
}

export const Header = (props: HeaderProps): ReactElement => {
  const { avatar, className, ...otherProps } = props;

  return (
    <div {...otherProps} className={cn(styles.header, className)}>
      <Avatar
        {...avatar}
        sx={{ width: 50, height: 50 }}
        className="cu-p"
        title={avatar?.alt}
      />
    </div>
  );
};
