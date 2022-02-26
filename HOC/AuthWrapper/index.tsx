import * as React from "react";
import { AuthWrapperProps, TRedirect } from "./AuthWrapper.props";
import styles from "./AuthWrapper.module.scss";
import { Container, Typography } from "@mui/material";
import Link from "next/link";

export const AuthWrapper = (props: AuthWrapperProps): React.ReactElement => {
	const { description, redirect, title, children } = props;

	return (
		<Container className={styles.wrapper} fixed>
			<Typography
				component="h1"
				variant="h6"
				fontWeight="700"
				textTransform="uppercase"
				fontSize={18}
			>
				{title}
			</Typography>
			<Typography component="p" color="#6E7191" fontSize={14}>
				{description}
			</Typography>

			<div className={styles.inner}>
				<div className={styles.children}>{children}</div>
				<Redirect redirect={redirect} />
			</div>
		</Container>
	);
};

const Redirect = ({ redirect }: { redirect: TRedirect }): React.ReactElement => {
	return (
		<Link href={redirect}>
			<a className={styles.redicect}>
				{redirect === "/register" ? "Зарегистрироваться" : "Войти в аккаунт"}
			</a>
		</Link>
	);
};
