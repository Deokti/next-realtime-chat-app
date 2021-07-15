import { useFormik } from 'formik';
import React from "react";
import { AuthForm, AuthRedirect, AuthInput } from '../../components/Auth';

import Button from "../../components/Button";
import { ROUTE_PATH } from "../../config/route-path";

import * as yup from 'yup';
import { ILogin } from "../../interfaces/auth";
import { auth } from "../../config/firebase";
import { useAuth } from "../../hooks/useAuth";
import HeadTitle from "../../components/HeadTitle";
import { redirectToPage } from '../../utils/redirect-to-page';
import { notification } from '../../utils/notification';

function Login(): React.ReactElement {
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
    };
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
      .then(onMessage)
      .catch(onRejection);
  }

  function onMessage(): void {
    notification({ content: 'Вы вошли в систему', appearance: 'success' });
    redirectToPage(ROUTE_PATH.app);
  }

  return (
    <React.Fragment>
      <HeadTitle title="Авторизация" />

      <AuthForm title="Войти" onSubmit={formik.handleSubmit} error={error}>
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
          disabled={loading || (!formik.dirty || !formik.isValid)}
          loading={loading}
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
