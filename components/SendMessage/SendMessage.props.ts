/* eslint-disable prettier/prettier */
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SendMessageProps
  extends DetailedHTMLProps<
  HTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
  > {
  value: string;
}
