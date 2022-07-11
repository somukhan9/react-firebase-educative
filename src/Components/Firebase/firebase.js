import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCvHZJV-gRWWjjcxHcSGT5zoVkNenGvp2c',
  authDomain: 'educative-firebase-react-282ec.firebaseapp.com',
  projectId: 'educative-firebase-react-282ec',
  storageBucket: 'educative-firebase-react-282ec.appspot.com',
  messagingSenderId: '245852159463',
  appId: '1:245852159463:web:16932bd50efa2d64a99142',
  measurementId: 'G-F9G6H2C3DL',
}

class Firebase {
  constructor() {
    this.app = initializeApp(firebaseConfig)
    this.auth = getAuth(this.app)
    this.db = getDatabase(
      this.app,
      'https://educative-firebase-react-282ec-default-rtdb.asia-southeast1.firebasedatabase.app'
    )
  }

  //**   API Auth    **//

  doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  doCreateUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  doSignOut = () => signOut(this.auth)

  doPasswordReset = (email) => sendPasswordResetEmail(this.auth, email)

  doPasswordUpdate = (password) => {
    return updatePassword(this.auth.currentUser, password)
  }

  doSaveUserDocument = (username, email) => {
    const userID = this.auth.currentUser.uid
    set(ref(this.db, `users/${userID}`), { username, email })
  }
}

export default Firebase
