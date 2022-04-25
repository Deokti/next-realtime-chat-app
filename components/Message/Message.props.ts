import { IMessage } from "../../interfaces/message";

export interface MessageProps extends IMessage {
  isCreator: boolean;
}
