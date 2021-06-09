import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode
  apperance?: 'green' | 'red' | 'transparent'
  disabled?: boolean
  size?: 'large' | 'default' | 'full'
  loading: boolean
}