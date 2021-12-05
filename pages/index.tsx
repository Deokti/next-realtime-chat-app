import styles from '../styles/Home.module.scss';
import { FC, ReactElement } from 'react';
import Login from './auth/login';
import Register from './auth/register';

export interface HomeProps {
  getUserByUid: (uid: string) => void;
}

const Home: FC = (): ReactElement => {
  return (
    <main className={styles.app}>
      <Login />
      <Register />
    </main>
  );
};

export default Home;