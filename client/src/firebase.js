import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCK2cRw9tC9hBuOd4zxs5nMhw08HQHDtcg",
  authDomain: "turingchat-24021.firebaseapp.com",
  projectId: "turingchat-24021",
  storageBucket: "turingchat-24021.appspot.com",
  messagingSenderId: "216149831841",
  appId: "1:216149831841:web:ab075ccd998b6c81a300e0",
  measurementId: "G-7H2HG87689"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

export { firebaseConfig, app, auth, firestore }