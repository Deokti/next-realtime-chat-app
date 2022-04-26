import { DefaultInputProps } from "../../interfaces/extends.props";

export interface AuthInputProps extends DefaultInputProps {
  appearance: "email" | "password" | "text";
  isVisiblePassword?: boolean;
  label: string;
  error?: string;
}
