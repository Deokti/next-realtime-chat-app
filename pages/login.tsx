import { useFormik } from "formik";
import React from "react";

import * as yup from "yup";
import { ILogin } from "../interfaces/auth";
import HeadTitle from "../components/HeadTitle";
import { AuthWrapper } from "../HOC/AuthWrapper";
import { AuthInput } from "../components/AuthInput";
import { Button } from "@mui/material";

function Login(): React.ReactElement {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		onSubmit: onSubmit,
	});

	function initialValues(): ILogin {
		return {
			email: "",
			password: "",
		};
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	function validationSchema() {
		return yup.object().shape({
			email: yup
				.string()
				.email("Не корректный Email адресс!")
				.required("Поле должно быть заполнено!"),
			password: yup
				.string()
				.min(6, "Пароль должен содержать не менее 6 символов")
				.required("Поле должно быть заполнено!"),
		});
	}

	function onSubmit(): void {
		console.log("Submit");
	}

	return (
		<React.Fragment>
			<HeadTitle title="Войти в аккаунт" />

			<AuthWrapper
				title="войти в аккаунт"
				description="для продолжения - войдите в свой аккаунт"
				redirect="/register"
			>
				<form>
					<AuthInput
						appearance="email"
						label="Е-маил"
						name="email"
						error={formik.errors.email}
						onChange={formik.handleChange}
					/>
					<AuthInput
						appearance="password"
						label="Пароль"
						name="password"
						error={formik.errors.password}
						onChange={formik.handleChange}
					/>
					<Button
						variant="contained"
						fullWidth
						className="mt-20"
						style={{ borderRadius: 0, boxShadow: "none", color: "#FFF" }}
					>
						Войти
					</Button>
				</form>
			</AuthWrapper>
		</React.Fragment>
	);
}

export default Login;
