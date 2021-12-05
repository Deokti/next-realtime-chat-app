import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { AuthInput } from "../../components/Auth/AuthInput";
import AuthRedirect from "../../components/Auth/AuthRedirect";
import Button from "../../components/Button";
import HeadTitle from "../../components/HeadTitle";
import { ROUTE_PATH } from "../../config/route-path";

import * as yup from 'yup';
import { useFormik } from 'formik';

import { IRegister } from "../../interfaces/auth";

function Register(): React.ReactElement {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: onSubmit
  });

  function initialValues(): IRegister {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
  }

  function validationSchema() {
    return yup.object().shape({
      username: yup.string().required('Поле должно быть заполнено!'),
      email: yup.string().email('Не корректный Email адресс!').required('Поле должно быть заполнено!'),
      password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Поле должно быть заполнено!'),
      passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают!').required('Поле должно быть заполнено!')
    });
  }

  function onSubmit(values: IRegister): void {
    console.log('Регистрация:', values);

  }

  return (
    <React.Fragment>
      <HeadTitle title="Регистрация" />

      <AuthForm title="Регистрация" onSubmit={formik.handleSubmit}>
        <AuthInput
          placeholder="Имя пользователя"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
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
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <AuthInput
          placeholder="Повторите пароль"
          type="password"
          name="passwordConfirm"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          error={formik.errors.passwordConfirm}
        />

        <Button size="full">
          Регистрация
        </Button>

        <AuthRedirect href={ROUTE_PATH.login}>Уже зарегистрированы?</AuthRedirect>
      </AuthForm>
    </React.Fragment>
  );
}

export default Register;
