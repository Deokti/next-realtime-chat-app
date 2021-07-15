import { IUser } from "./auth";

export interface AuthState {
	loggedUser: null | IUser
}

export interface ReduxState {
	auth: AuthState
}