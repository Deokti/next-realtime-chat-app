import { useFormik } from "formik";
import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import AuthInput from "../../components/Auth/AuthInput";
import AuthRedirect from "../../components/Auth/AuthRedirect";
import Button from "../../components/Button";
import HeadTitle from "../../components/HeadTitle";
import { ROUTE_PATH } from "../../config/route-path";

import * as yup from 'yup';
import { PulseLoader } from "react-spinners";
import { ILogin } from "../../types/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../hooks/useAuth";

function Login() {
  const { loading, error, onLoading, onSucsess, onRejection } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: onSubmit,
  });

  function initialValues(): ILogin {
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

  function onSubmit({ email, password }: ILogin) {
    onLoading();
    signInWithEmailAndPassword({ email, password });
  }

  async function signInWithEmailAndPassword({ email, password }: ILogin) {
    auth.signInWithEmailAndPassword(email, password)
      .then(onSucsess)
      .then(() => console.info('Пользователь вошёл в систему'))
      .catch(onRejection)
  }

  return (
    <React.Fragment>
      <HeadTitle title="Авторизация" />

      <AuthForm title="Войти" onSubmit={formik.handleSubmit} error={error}>
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
          LoadingIcon={<PulseLoader color="#fff" size={10} />}
          isLoading={loading}
        >
          Войти
        </Button>

        <AuthRedirect href={ROUTE_PATH.register}>Ещё не зарегистрированы?</AuthRedirect>
      </AuthForm>
    </React.Fragment>
  )
}

export default Login;
