import React, { useEffect } from "react";
import HeadTitle from "../components/HeadTitle";
import { ROUTES } from "../config/routes";

import * as yup from "yup";
import { useFormik } from "formik";

import { IRegister } from "../interfaces/auth";
import { AuthWrapper } from "../HOC/AuthWrapper";
import { AuthInput } from "../components/AuthInput";
import { Button } from "@mui/material";

function Register(): React.ReactElement {
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		onSubmit: onSubmit,
	});

	function initialValues(): IRegister {
		return {
			username: "",
			email: "",
			password: "",
		};
	}

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	function validationSchema() {
		return yup.object().shape({
			username: yup.string().required("Поле должно быть заполнено!"),
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

	function onSubmit(values: IRegister): void {
		console.log("Регистрация:", values);
	}

	return (
		<React.Fragment>
			<HeadTitle title="Зарегистрировать аккаунт" />

			<AuthWrapper
				title="Зарегистрировать аккаунт"
				description="после регистрации вы окажетесь на главной странице"
				redirect="/login"
			>
				<form>
					<AuthInput
						appearance="text"
						label="Имя пользователя"
						name="username"
						onChange={formik.handleChange}
						error={formik.errors.username}
					/>
					<AuthInput
						appearance="email"
						label="Е-маил"
						name="email"
						onChange={formik.handleChange}
						error={formik.errors.email}
					/>
					<AuthInput
						appearance="password"
						label="Пароль"
						name="password"
						onChange={formik.handleChange}
						error={formik.errors.password}
					/>
					<Button
						variant="contained"
						fullWidth
						className="mt-20"
						style={{ borderRadius: 0, boxShadow: "none", color: "#FFF" }}
					>
						Регистрация
					</Button>
				</form>
			</AuthWrapper>
		</React.Fragment>
	);
}

export default Register;
