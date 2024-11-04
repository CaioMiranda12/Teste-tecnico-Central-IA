import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA5BQQpikrttQrltxFKrutaLH8lNye-pBM',
  authDomain: 'central-ia.firebaseapp.com',
  projectId: 'central-ia',
  storageBucket: 'central-ia.firebasestorage.app',
  messagingSenderId: '930842685773',
  appId: '1:930842685773:web:7797eee17eca783fc1c704',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };
