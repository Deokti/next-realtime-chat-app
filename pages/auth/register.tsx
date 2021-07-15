import React from "react";
import AuthForm from "../../components/Auth/AuthForm";
import AuthInput from "../../components/Auth/AuthInput";
import AuthRedirect from "../../components/Auth/AuthRedirect";
import Button from "../../components/Button";
import HeadTitle from "../../components/HeadTitle";
import { ROUTE_PATH } from "../../config/route-path";

import * as yup from 'yup';
import { useFormik } from 'formik';

import { auth, database } from "../../config/firebase";
import { IRegister, IUser } from "../../interfaces/auth";

import md5 from 'md5';
import { DATABASE_REF } from "../../config/database-ref";

import { useAuth } from "../../hooks/useAuth";
import { notification } from "../../utils/notification";
import { redirectToPage } from "../../utils/redirect-to-page";

function Register(): React.ReactElement {
  const { loading, error, onLoading, onSucsess, onRejection } = useAuth();

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
    createUserWithEmailAndPassword(values)
      .then(onSucsess)
      .then(onMessage)
      .catch(onRejection);
  }

  function onMessage(): void {
    notification({ content: 'Вы зарегистрированы', appearance: 'success' });
    notification({ content: 'Вы вошли в систему', appearance: 'success' });
    redirectToPage(ROUTE_PATH.app);
  }

  async function createUserWithEmailAndPassword({ username, email, password }: IRegister) {
    onLoading();

    const createdUser = await auth.createUserWithEmailAndPassword(email, password);

    if (createdUser && createdUser.user) {
      await createdUser.user.updateProfile({
        displayName: username,
        photoURL: `http://gravatar.com/avatar/${md5(email)}?d=identicon`
      });

      await saveUserToDatabase({
        id: createdUser.user.uid,
        username: createdUser.user.displayName as string,
        avatar: createdUser.user.photoURL as string,
        isOnline: false
      });
    }
  }

  async function saveUserToDatabase(user: IUser) {
    const { id } = user;

    database.ref(DATABASE_REF.USERS)
      .child(id)
      .set(createdUser(user));
  }

  function createdUser({ id, username, avatar, isOnline }: IUser): IUser {
    return {
      id,
      username,
      avatar,
      isOnline
    };
  }

  return (
    <React.Fragment>
      <HeadTitle title="Регистрация" />

      <AuthForm title="Регистрация" onSubmit={formik.handleSubmit} error={error}>
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
          size="full"
          disabled={loading || (!formik.dirty || !formik.isValid)}
          loading={loading}
        >
          Регистрация
        </Button>

        <AuthRedirect href={ROUTE_PATH.login}>Уже зарегистрированы?</AuthRedirect>
      </AuthForm>
    </React.Fragment>
  );
}

export default Register;
