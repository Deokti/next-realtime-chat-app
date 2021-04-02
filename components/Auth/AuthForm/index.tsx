import React, { ChangeEvent } from 'react';
import AuthError from '../AuthError';
import styles from './AuthForm.module.scss';

type TAithForm = {
  error?: string
  title: string
  children: any
  onSubmit?: (event: ChangeEvent<HTMLFormElement>) => void;
}

function AuthForm({ title, children, onSubmit, error = '' }: TAithForm) {

  return (
    <form className={styles.auth} onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </header>

        <div className={styles.form}>
          {children}

          {error.length > 0 && (
            <AuthError
              textAlign="center"
              fontWeight={700}
              fontSize={16}
              marginTop={10}
            >
              {error}
            </AuthError>
          )}
        </div>
      </div>
    </form>
  )

}

export default AuthForm;