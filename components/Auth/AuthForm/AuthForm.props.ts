import { ChangeEvent, ReactNode } from "react";

export interface AuthFormProps {
	error?: string;
	title: string;
	children: ReactNode;
	onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
}
