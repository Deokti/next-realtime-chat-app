import Login from './auth/login';
import Register from './auth/register';

import styles from '../styles/Home.module.scss';

function Home(): React.ReactElement {
  return (
    <main className={styles.app}>
      <Login />
    </main>
  );
}


export default Home;