import React, { memo } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import classnames from 'classnames';

// --- Что должно содержаться в компоненте ---
// 1. Передаваться дочерний элемент. 
// 2. Должны быть определены базовые размеры, исходящие из макета
// 3. Передаваться событие клика


function Button({ children, apperance = 'green', disabled = false, className, size = 'default', loading, LoadingIcon, ...props }: ButtonProps): React.ReactElement {

  return (
    <button className={classnames(styles.button, className, {
      [styles.green]: apperance === 'green',
      [styles.red]: apperance === 'red',
      [styles.default]: apperance === 'transparent',
      [styles.default]: size === 'default',
      [styles.large]: size === 'large',
      [styles.full]: size === 'full',
    })}
    disabled={disabled}
    {...props}
    >
      {loading ? LoadingIcon : children}
    </button>
  );
}

export default memo(Button);
