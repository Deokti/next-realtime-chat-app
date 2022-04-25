import { ROUTER } from "./../../config/ROUTER";
import { ReactNode } from "react";

export type TLinkRedirect = "/login" | "/register";
export type TRedirect = [link: ROUTER, text: string];

export interface AuthWrapperProps {
  title: string;
  description: string;
  redirect: TRedirect;
  children: ReactNode;
  isLoading: boolean;
}
