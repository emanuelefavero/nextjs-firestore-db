// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0bVJ9Exgcy6wxyGybu7d8zyPWWAkSK3Q',
  authDomain: 'nextjs-firestore-db-df0dc.firebaseapp.com',
  projectId: 'nextjs-firestore-db-df0dc',
  storageBucket: 'nextjs-firestore-db-df0dc.appspot.com',
  messagingSenderId: '779927272224',
  appId: '1:779927272224:web:3b1618555713fc54fbf545',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// ! remember to change firestore from test mode to production mode
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
