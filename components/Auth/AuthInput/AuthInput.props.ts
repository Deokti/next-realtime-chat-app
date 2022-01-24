import { ChangeEvent } from "react";

export interface AuthInputProps {
	placeholder?: string;
	name?: string;
	onChange: (value: ChangeEvent<HTMLInputElement>) => unknown;
	value?: string;
	type?: "text" | "password";
	error?: string | undefined;
}
