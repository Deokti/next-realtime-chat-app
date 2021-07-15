import { IAuthError } from "../../interfaces/auth";

export interface IUseAuth {
	loading: boolean
	error: string
	onLoading: () => void
	onSucsess: () => void
	onRejection: (error: IAuthError) => void
}