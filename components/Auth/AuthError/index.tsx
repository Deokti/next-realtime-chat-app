import React from 'react';

interface AuthErrorProps {
  children?: string
  fontWeight?: 100 | 300 | 400 | 500 | 600 | 700 | 900
  fontSize?: number
  color?: string
  display?: 'block' | 'inline' | 'flex' | 'inline-block'
  textAlign?: 'left' | 'center' | 'right'
  position?: 'relative' | 'absolute',
  left?: number,
  right?: number,
  top?: number,
  bottom?: number,
  marginTop?: number
}

function AuthError(
  { children,
    fontWeight,
    fontSize,
    color = '#ff4460',
    display = 'block',
    textAlign = 'left',
    position,
    left,
    right,
    top,
    bottom,
    marginTop
  }: AuthErrorProps) {
  return (
    <span
      style={{
        fontWeight,
        fontSize,
        color,
        display,
        textAlign,
        position,
        left,
        right,
        top,
        bottom,
        marginTop
      }}
    >
      {children}
    </span>
  )
}

export default AuthError;