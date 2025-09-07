
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  projectId: 'alumniverse-ihph1',
  appId: '1:256128444364:web:b2b55f9df4d7aa012cdf69',
  storageBucket: 'alumniverse-ihph1.firebasestorage.app',
  apiKey: 'AIzaSyB-bf0pZ4A40fUBcUs0EnFpwNysbpxPBo0',
  authDomain: 'alumniverse-ihph1.firebaseapp.com',
  measurementId: '',
  messagingSenderId: '256128444364',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
