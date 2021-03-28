import React from "react";
import AuthForm from "../../components/AuthForm";
import AuthInput from "../../components/AuthInput";
import AuthRedirect from "../../components/AuthRedirect";
import Button from "../../components/Button";
import HeadTitle from "../../components/HeadTitle";
import { PATH } from "../../config/path";

function Login() {
  return (
    <React.Fragment>
      <HeadTitle title="Авторизация" />

      <AuthForm title="Войти">
        <AuthInput placeholder="Email" name="email" />
        <AuthInput placeholder="Пароль" name="password" />

        <Button
          backgroundColor="#ff4460"
          width="100%"
          height={40}
          borderRadius={4}
        >
          Войти
        </Button>

        <AuthRedirect href={PATH.register}>Ещё не зарегистрированы?</AuthRedirect>
      </AuthForm>
    </React.Fragment>
  )
}

export default Login;
