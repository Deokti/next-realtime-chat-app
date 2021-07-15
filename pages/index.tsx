import styles from '../styles/Home.module.scss';
import { useEffect } from 'react';
import { auth } from '../config/firebase';
import { ROUTE_PATH } from '../config/route-path';
import { redirectToPage } from '../utils/redirect-to-page';
import { connect } from 'react-redux';
import { getUserByUid } from '../actions/auth';

export interface HomeProps {
  getUserByUid: (uid: string) => void;
}

function Home({ getUserByUid }: HomeProps): React.ReactElement {
  useEffect(onAuthStateChanged, [onAuthStateChanged]);

  function onAuthStateChanged(): void {
    auth.onAuthStateChanged(loggedUser => {
      if (loggedUser === null) {
        return redirectToPage(ROUTE_PATH.login);
      }

      return getUserByUid(loggedUser.uid);
    });
  }

  return (
    <main className={styles.app}>
      Здесь будет что-то другое
    </main>
  );
}

export default connect(null, { getUserByUid })(Home);