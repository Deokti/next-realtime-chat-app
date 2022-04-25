import React from "react";
import HeadTitle from "../components/HeadTitle";

import * as yup from "yup";
import { useFormik } from "formik";

import { IRegister } from "../interfaces/auth";
import { AuthInput } from "../components/AuthInput";
import { Button } from "@mui/material";
import { useAppSelector, getApp, useAppDispatch } from "../hooks/redux";
import { appSlice } from "../store/reducers/app";
import { ROUTER } from "../config/ROUTER";
import { AuthWrapper } from "../components/AuthWrapper";

function Register(): React.ReactElement {
  const { setLoading } = appSlice.actions;
  const { isLoading } = useAppSelector(getApp);

  const dispatch = useAppDispatch();

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
    dispatch(setLoading(true));
  }

  return (
    <React.Fragment>
      <HeadTitle title="Зарегистрировать аккаунт" />

      <AuthWrapper
        title="Зарегистрировать аккаунт"
        description="после регистрации вы окажетесь на главной странице"
        redirect={[ROUTER.LOGIN, "Уже зарегистрированы?"]}
        isLoading={isLoading}
      >
        <form onSubmit={formik.handleSubmit}>
          <AuthInput
            appearance="text"
            label="Имя пользователя"
            name="username"
            type="text"
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
            type="submit"
            className="mt-20"
            style={{ borderRadius: 0, boxShadow: "none", color: "#FFF" }}
            disabled={!(formik.isValid && formik.dirty)}
          >
            Регистрация
          </Button>
        </form>
      </AuthWrapper>
    </React.Fragment>
  );
}

export default Register;
