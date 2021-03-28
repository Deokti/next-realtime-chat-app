import { ChangeEvent } from 'react';
import styles from './AuthForm.module.scss';

type TAithForm = {
  title: string
  children: any
  onSubmit?: (event: ChangeEvent<HTMLFormElement>) => void;
}

function AuthForm({ title, children, onSubmit }: TAithForm) {

  return (
    <form className={styles.auth} onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
        </header>

        <div className={styles.form}>
          {children}
        </div>
      </div>
    </form>
  )

}

export default AuthForm;