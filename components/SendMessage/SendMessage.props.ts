/* eslint-disable prettier/prettier */
import { IEmojiData } from "emoji-picker-react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SendMessageProps
  extends DetailedHTMLProps<
  HTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
  > {
  value: string;
  isEmojiVisible?: boolean;
  onEmojiVisible?: () => void;
  onEmojiClick: (event: React.MouseEvent, data: IEmojiData) => void;
}
