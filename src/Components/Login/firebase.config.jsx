import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD38G3c30YuZ3bHrB27fWeNWZZJXyARlY8",
    authDomain: "fir-practice-01-e9a80.firebaseapp.com",
    projectId: "fir-practice-01-e9a80",
    storageBucket: "fir-practice-01-e9a80.appspot.com",
    messagingSenderId: "40960276189",
    appId: "1:40960276189:web:78f9d1168271c860434d34"
  };

//   Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

export {auth, provider, fbProvider};