import { Fragment, ChangeEvent, useState } from "react";
import AuthForm from "../../components/AuthForm";
import AuthInput from "../../components/AuthInput";
import AuthRedirect from "../../components/AuthRedirect";
import Button from "../../components/Button";
import HeadTitle from "../../components/HeadTitle";
import { PATH } from "../../config/path";

import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { PulseLoader } from 'react-spinners';

interface IinitialValues {
  username: string
  email: string
  password: string
  passwordConfirm: string
}


function Register() {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: validationSchema(),
    onSubmit: onSubmit
  });

  function validationSchema() {
    return yup.object().shape({
      username: yup.string().required('Поле должно быть заполнено!'),
      email: yup.string().email('Не корректный Email адресс!').required('Поле должно быть заполнено!'),
      password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Поле должно быть заполнено!'),
      passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают!').required('Поле должно быть заполнено!')
    })
  }

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

        <Button
          LoadingIcon={<PulseLoader color="#fff" size={10} />}
          isLoading={false}
          type="submit"
          backgroundColor="#ff4460"
          width="100%"
          disabled={!formik.dirty || !formik.isValid}
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
