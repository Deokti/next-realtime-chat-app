import { IUser } from "./auth";

export interface ActionType {
	type: string;
}

export interface AuthAction extends ActionType {
	payload: IUser
}