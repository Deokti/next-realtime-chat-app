import { useFormik } from "formik";
import React from "react";

import * as yup from "yup";
import { ILogin } from "../interfaces/auth";
import HeadTitle from "../components/HeadTitle";
import { AuthInput } from "../components/AuthInput";
import { Button } from "@mui/material";
import { getApp, useAppDispatch, useAppSelector } from "../hooks/redux";
import { appSlice } from "../store/reducers/app";
import { AuthWrapper } from "../components/AuthWrapper";
import { ROUTER } from "../config/ROUTER";

function Login(): React.ReactElement {
  const { setLoading } = appSlice.actions;
  const { isLoading } = useAppSelector(getApp);

  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit,
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

  function onSubmit(values: ILogin): void {
    console.log("Submit", values);
    dispatch(setLoading(true));
  }

  return (
    <React.Fragment>
      <HeadTitle title="Войти в аккаунт" />

      <AuthWrapper
        title="войти в аккаунт"
        description="для продолжения - войдите в свой аккаунт"
        redirect={[ROUTER.REGISTER, "Зарегистрироваться"]}
        isLoading={isLoading}
      >
        <form onSubmit={formik.handleSubmit}>
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
            type="submit"
            className="mt-20"
            style={{ borderRadius: 0, boxShadow: "none", color: "#FFF" }}
            disabled={!formik.dirty && formik.isValid}
          >
            Войти
          </Button>
        </form>
      </AuthWrapper>
    </React.Fragment>
  );
}

export default Login;
