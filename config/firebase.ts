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


// Столкнулся с проблемой, что после перезагрузки страницы
// может выдать ошибку FirebaseError: Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
// Она связана с тем, что в проекте использоваться Next, что значит SSR - Рендер на стороне сервера
// из-за чего инициализация происходила несколько раз, и таким образом дабы измебать, следует сделать проверку на то,
// что иницилизации ещё не было, а если она была - вернуть app
const initializeFirebase = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

// Аутентификация
const auth = initializeFirebase.auth();

// База данных
const database = initializeFirebase.database();

// Хранилище для файлов 
const storage = initializeFirebase.storage();


export default initializeFirebase;
export { auth, database, storage };