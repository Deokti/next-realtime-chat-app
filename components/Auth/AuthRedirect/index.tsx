import React, { memo, ReactElement } from "react";
import Link from "next/link";

import styles from "./AuthRedirect.module.scss";
import { AuthRedirectProps } from "./AuthRedirect.props";

function AuthRedirect({ children, href = "/" }: AuthRedirectProps): ReactElement {
	return (
		<Link href={href}>
			<a className={styles.redirect}>{children}</a>
		</Link>
	);
}

export default memo(AuthRedirect);
