import { useFormik } from "formik";
import React from "react";
import AuthForm from "../../components/AuthForm";
import AuthInput from "../../components/AuthInput";
import AuthRedirect from "../../components/AuthRedirect";
import Button from "../../components/Button";
import HeadTitle from "../../components/HeadTitle";
import { PATH } from "../../config/path";

import * as yup from 'yup';

interface IInitialValues {
  email: string
  password: string
}

function Login() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: onSubmit,
  });

  function initialValues(): IInitialValues {
    return {
      email: '',
      password: ''
    }
  }

  function validationSchema() {
    return yup.object().shape({
      email: yup.string().email('Не корректный Email адресс!').required('Поле должно быть заполнено!'),
      password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Поле должно быть заполнено!'),
    });
  }

  function onSubmit() {
    console.log(formik.values);
  }

  return (
    <React.Fragment>
      <HeadTitle title="Авторизация" />

      <AuthForm title="Войти" onSubmit={formik.handleSubmit}>
        <AuthInput
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <AuthInput
          placeholder="Пароль"
          type="password"
          name="password"
          error={formik.errors.password}
          onChange={formik.handleChange}
        />

        <Button
          backgroundColor="#ff4460"
          width="100%"
          height={40}
          borderRadius={4}
          type="submit"
          disabled={!formik.dirty || !formik.isValid}
        >
          Войти
        </Button>

        <AuthRedirect href={PATH.register}>Ещё не зарегистрированы?</AuthRedirect>
      </AuthForm>
    </React.Fragment>
  )
}

export default Login;
