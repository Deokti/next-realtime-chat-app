import React, { useState, ChangeEvent, memo } from 'react';
import AuthError from '../AuthError';

import styles from './AuthInput.module.scss';

/**
 * -- TAuthInput --
 * placeholder: тестовая строка внутри input 
 * name: название input для динамиряеского получения ключа и значения
 * onChange: событие, принимает в сетя текст 
 * value: текущее значение input для создания контролируемого input
 * type: тип для input
 */

export interface AuthInputProps {
  placeholder?: string
  name?: string
  onChange?: (value: ChangeEvent<HTMLInputElement>) => any
  value?: string
  type?: "text" | "password"
  error?: string
}

function AuthInput({ placeholder, name, onChange, value = '', type = 'text', error }: AuthInputProps) {
  const [emptyValue, setEmptyValue] = useState<boolean>(false);

  function onEmptyValue({ currentTarget }: ChangeEvent<HTMLInputElement>): void {
    const value = currentTarget.value;

    // Неявное преобразование к boolean
    setEmptyValue(!!value);
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
      <span className={`${styles.span} ${emptyValue && styles.active}`}>{placeholder}</span>
      {error && error.length > 0 && (
        <AuthError
          fontSize={11}
          fontWeight={300}
          position="absolute"
          left={0}
          bottom={-18}
        >
          {error}
        </AuthError>
      )}
    </label>
  )
}

export default memo(AuthInput);