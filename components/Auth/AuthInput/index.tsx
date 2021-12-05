import React, { useState, ChangeEvent, ReactElement } from 'react';
import AuthError from '../AuthError';
import { AuthInputProps } from './AuthInput.props';

import styles from './AuthInput.module.scss';
import classnames from 'classnames';

export const AuthInput = (props: AuthInputProps): ReactElement => {
  const {
    placeholder,
    name = '',
    onChange,
    value = '',
    type = 'text',
    error
  } = props;

  const [emptyValue, setEmptyValue] = useState<boolean>(false);

  function onEmptyValue(event: ChangeEvent<HTMLInputElement>): void {
    setEmptyValue(!!event.currentTarget.value);
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
      <span className={classnames(styles.span, {
        [styles.active]: emptyValue
      })}
      >
        {placeholder}
      </span>
      {error && error.length > 0 && (
        <AuthError apperance="input">
          {error}
        </AuthError>
      )}
    </label>
  );
};
