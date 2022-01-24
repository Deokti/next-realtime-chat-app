export interface IUser {
	id: string;
	avatar: string;
	username: string;
	isOnline: boolean;
}

export interface ILogin {
	email: string;
	password: string;
}

export interface IRegister {
	username: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface IAuthError {
	a: unknown;
	code: string;
	message: string;
}
