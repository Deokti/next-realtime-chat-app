import { IAuthError } from "../../types/auth";

export interface IUseAuth {
	loading: boolean
	error: string
	onLoading: () => void
	onSucsess: () => void
	onRejection: (error: IAuthError) => void
}