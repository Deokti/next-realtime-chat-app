import React from 'react'
import Login from './auth/login'
import Register from './auth/register';

import styles from '../styles/Home.module.scss'

function Home() {
  return (
    <main className={styles.app}>
      <Register />
    </main>
  )
}


export default Home;