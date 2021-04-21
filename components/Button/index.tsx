import React, { memo } from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  children?: string
  width?: number | string
  height?: number | string
  border?: string
  cursor?: 'pointer' | 'text' | 'auto'
  backgroundColor?: string
  color?: string
  fontSize?: number
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  borderRadius?: number
  onClick?: () => {}
  type?: 'button' | 'submit',
  isLoading?: boolean
  LoadingIcon?: JSX.Element | undefined
  disabled?: boolean
}

function Button({
  type = 'button',
  children = 'Нажми на меня',
  width,
  height,
  border = 'none',
  cursor = 'pointer',
  backgroundColor,
  color = "#fff",
  fontSize = 16,
  fontWeight,
  borderRadius = 0,
  onClick,
  LoadingIcon,
  isLoading = false,
  disabled = false
}: ButtonProps) {

  return (
    <button
      className={`${styles.button} ${isLoading ? styles.isLoading : ''} ${disabled ? styles.disabled : ''}`.trim()}
      type={type}
      style={
        {
          cursor,
          width,
          height,
          border,
          backgroundColor,
          color,
          fontSize,
          fontWeight,
          borderRadius
        }
      }
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? LoadingIcon : children}
    </button>
  );
}

export default memo(Button);
