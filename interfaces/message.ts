import { IUser } from "./auth";

export interface IMessage {
  data: string;
  timestamp: number;
  creator: IUser;
  isWatched: boolean;
}
