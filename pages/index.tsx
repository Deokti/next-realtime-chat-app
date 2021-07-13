import styles from '../styles/Home.module.scss';
import { useEffect } from 'react';
import { auth, database } from '../config/firebase';
import { ROUTE_PATH } from '../config/route-path';
import { DATABASE_REF } from '../config/database-ref';
import { redirectToPage } from '../utils/redirect-to-page';

function Home(): React.ReactElement {
  useEffect(onAuthStateChanged, [onAuthStateChanged]);

  function onAuthStateChanged(): void {
    auth.onAuthStateChanged(loggedUser => {
      if (loggedUser === null) {
        return redirectToPage(ROUTE_PATH.login);
      }

      return getUserByUid(loggedUser.uid);
    });
  }

  function getUserByUid(uid: string) {
    return database.ref(DATABASE_REF.USERS)
      .child(uid)
      .on('value', (snap) => {
        console.log('snap:', snap.val());
      });
  }

  return (
    <main className={styles.app}>
      Здесь будет что-то другое
    </main>
  );
}

export default Home;