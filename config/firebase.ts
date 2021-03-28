import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAgoco_q53tT1qpK8e7LsopqSlA7DxOXhg",
  authDomain: "react-next-realtime-app.firebaseapp.com",
  projectId: "react-next-realtime-app",
  storageBucket: "react-next-realtime-app.appspot.com",
  messagingSenderId: "827568555119",
  appId: "1:827568555119:web:b3b9ff3507163a2106399a"
};

const initializeFirebase = firebase.initializeApp(firebaseConfig);

// Аутентификация
const auth = initializeFirebase.auth();

// База данных
const database = initializeFirebase.database();

// Хранилище для файлов 
const storage = initializeFirebase.storage();


export default initializeFirebase;
export { auth, database, storage };