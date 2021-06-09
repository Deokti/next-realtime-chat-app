import React, { useState, ChangeEvent, memo } from 'react';
import AuthError from '../AuthError';
import { AuthInputProps } from './AuthInput.props';

import styles from './AuthInput.module.scss';
import classnames from 'classnames';

function AuthInput({ placeholder, name = '', onChange, value = '', type = 'text', error }: AuthInputProps): React.ReactElement {
  const [emptyValue, setEmptyValue] = useState<boolean>(false);

  function onEmptyValue({ currentTarget }: ChangeEvent<HTMLInputElement>): void {
    const value = Boolean(currentTarget.value);

    setEmptyValue(value);
  }

  return (
    <label className={styles.label}>
      <input
        type={type}
        className={styles.input}
        name={name}
        onInput={onEmptyValue}
        onChange={onChange}
        value={value}
      />
      <span className={classnames(styles.span, { [styles.active]: emptyValue })}>
        {placeholder}
      </span>
      {error && error.length > 0 && (
        <AuthError apperance="input">
          {error}
        </AuthError>
      )}
    </label>
  );
}

export default memo(AuthInput);