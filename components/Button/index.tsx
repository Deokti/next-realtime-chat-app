import React, { memo } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import classnames from 'classnames';
import { PulseLoader } from 'react-spinners';

function Button({ children, apperance = 'green', disabled = false, className, size = 'default', loading = false, ...props }: ButtonProps): React.ReactElement {

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
      {loading ? <PulseLoader color="#fff" size={10} /> : children}
    </button>
  );
}

export default memo(Button);
