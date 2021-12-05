import { useFormik } from 'formik';
import React from "react";
import { AuthForm, AuthRedirect, AuthInput } from '../../components/Auth';

import Button from "../../components/Button";
import { ROUTE_PATH } from "../../config/route-path";

import * as yup from 'yup';
import { ILogin } from "../../interfaces/auth";
import HeadTitle from "../../components/HeadTitle";

function Login(): React.ReactElement {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: onSubmit,
  });

  function initialValues(): ILogin {
    return {
      email: '',
      password: ''
    };
  }

  function validationSchema() {
    return yup.object().shape({
      email: yup.string().email('Не корректный Email адресс!').required('Поле должно быть заполнено!'),
      password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Поле должно быть заполнено!'),
    });
  }

  function onSubmit() {
    console.log('Submit');
  }


  return (
    <React.Fragment>
      <HeadTitle title="Авторизация" />

      <AuthForm title="Войти" onSubmit={formik.handleSubmit}>
        <AuthInput
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <AuthInput
          placeholder="Пароль"
          type="password"
          name="password"
          error={formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <Button
          size="full"
          type="submit"
        >
          Войти
        </Button>

        <AuthRedirect href={ROUTE_PATH.register}>Ещё не зарегистрированы?</AuthRedirect>
      </AuthForm>
    </React.Fragment>
  );
}

export default Login;
