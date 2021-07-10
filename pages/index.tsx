import styles from '../styles/Home.module.scss';
import { useEffect } from 'react';
import { auth, database } from '../config/firebase';
import Router from 'next/router';
import { ROUTE_PATH } from '../config/route-path';
import { DATABASE_REF } from '../config/database-ref';

function Home(): React.ReactElement {
  useEffect(onAuthStateChanged, [onAuthStateChanged]);

  function onAuthStateChanged(): void {
    auth.onAuthStateChanged(loggedUser => {
      if (loggedUser === null) {
        return redirectToLogin();
      }

      return getUserByUid(loggedUser.uid);
    });
  }

  function redirectToLogin(): Promise<boolean> {
    return Router.push(ROUTE_PATH.login);
  }

  function getUserByUid(uid: string) {
    database.ref(DATABASE_REF.USERS)
      .child(uid)
      .on('value', (snap) => {
        console.log(snap.val());
      });
  }

  return (
    <main className={styles.app}>
      Здесь будет что-то другое
    </main>
  );
}


export default Home;