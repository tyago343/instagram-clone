// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import getFirestone from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA68XPt8IFOkik3TDma89NJYB85O18yAiQ',
  authDomain: 'instagram-clone-42615.firebaseapp.com',
  projectId: 'instagram-clone-42615',
  storageBucket: 'instagram-clone-42615.appspot.com',
  messagingSenderId: '546628864099',
  appId: '1:546628864099:web:9ca4e90e89f2ef2d685056',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestone()
const storage = getStorage()

export { app, db, storage }
