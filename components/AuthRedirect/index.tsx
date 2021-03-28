import Link from 'next/link'

import styles from './AuthRedirect.module.scss';

type TAuthRedirect = {
  children: string
  href?: string
}

function AuthRedirect({ children, href = '/' }: TAuthRedirect) {
  return (
    <Link href={href}>
      <a className={styles.redirect}>{children}</a>
    </Link>
  )
}

export default AuthRedirect;