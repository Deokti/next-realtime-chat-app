import React, { memo } from 'react';
import styles from './Button.module.scss';

type TButton = {
  children: string
  width?: number | string
  height?: number | string
  border?: string
  cursor?: 'pointer' | 'text' | 'auto'
  backgroundColor?: string
  color?: string
  fontSize?: number
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | number
  borderRadius?: number
  onClick?: () => {}
  type?: 'button' | 'submit',
  isLoading?: boolean
  LoadingIcon?: JSX.Element | null | Function
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
}: TButton) {

  const getLoadingIconByType = LoadingIcon === Function ? <LoadingIcon /> : LoadingIcon;
  const isRender = isLoading ? getLoadingIconByType : children;

  return (
    <button
      className={`${styles.button} ${isLoading && styles.isLoading} ${disabled && styles.disabled}`}
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
      {isRender}
    </button>
  );
}

export default memo(Button);
