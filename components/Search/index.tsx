import { ReactElement } from "react";
import { DefaultInputProps } from "../../interfaces/extends.props";
import styles from "./Search.module.scss";
import cn from "classnames";
import { MdSearch } from "react-icons/md";

export const Search = (props: DefaultInputProps): ReactElement => {
  const { className, onChange, value, placeholder, ...otherProps } = props;
  return (
    <label className={cn(styles.label, className)}>
      <MdSearch className={styles.icon} size={24} />
      <input
        {...otherProps}
        className={styles.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};
