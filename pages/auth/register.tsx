import { Fragment, ChangeEvent, useState } from "react";
import AuthForm from "../../components/AuthForm";
import AuthInput from "../../components/AuthInput";
import AuthRedirect from "../../components/AuthRedirect";
import Button from "../../components/Button";
import HeadTitle from "../../components/HeadTitle";
import { PATH } from "../../config/path";
import { useFormik, FormikHelpers } from 'formik';

import { PulseLoader } from 'react-spinners';



interface IinitialValues {
  username: string
  email: string
  password: string
  passwordRereat: string
}


function Register() {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordRereat: ''
    },
    onSubmit: onSubmit
  });

  function onSubmit(values: IinitialValues, actions: FormikHelpers<IinitialValues>) {
    console.log(values);

  }

  return (
    <Fragment>
      <HeadTitle title="Регистрация" />

      <AuthForm title="Регистрация" onSubmit={formik.handleSubmit}>
        <AuthInput
          placeholder="Имя пользователя"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <AuthInput
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <AuthInput
          placeholder="Пароль"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <AuthInput
          placeholder="Повторите пароль"
          type="password"
          name="passwordRereat"
          value={formik.values.passwordRereat}
          onChange={formik.handleChange}
        />

        <Button
          LoadingIcon={<PulseLoader color="#fff" size={10} />}
          isLoading={false}
          type="submit"
          backgroundColor="#ff4460"
          width="100%"
          height={40}
          borderRadius={4}
        >
          Регистрация
        </Button>

        <AuthRedirect href={PATH.login}>Уже зарегистрированы?</AuthRedirect>
      </AuthForm>
    </Fragment>

  )
}

export default Register;
