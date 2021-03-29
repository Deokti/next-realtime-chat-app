import React from 'react';

import styles from './AuthError.module.scss';

interface IAuthError {
  children?: string
}

function AuthError({ children }: IAuthError): React.ReactElement<IAuthError> {
  return <span className={styles.error}>{children}</span>
}

export default AuthError;