import React from "react";
import { AuthErrorProps } from "./AuthError.props";

import styles from "./AuthError.module.scss";
import classnames from "classnames";

function AuthError({
	children,
	apperance,
	className,
	...props
}: AuthErrorProps): React.ReactElement {
	return (
		<span
			className={classnames(styles.error, className, {
				[styles.input]: apperance === "input",
				[styles.form]: apperance === "form",
			})}
			{...props}
		>
			{children}
		</span>
	);
}

export default AuthError;
