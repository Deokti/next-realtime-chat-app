import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface AuthErrorProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	children?: ReactNode;
	apperance: "input" | "form";
}
