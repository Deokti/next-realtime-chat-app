import { ReactNode } from "react";

export type TRedirect = "/login" | "/register";

export interface AuthWrapperProps {
  title: string;
  description: string;
  redirect: TRedirect;
  children: ReactNode;
  isLoading: boolean;
}
