import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7uZkKDRLsNy_L7sNcNVM6Op5CuIcX9_M",
    authDomain: "management-f6832.firebaseapp.com",
    projectId: "management-f6832",
    storageBucket: "management-f6832.appspot.com",
    messagingSenderId: "139355038612",
    appId: "1:139355038612:web:5a79278465309ac2a3a581"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
