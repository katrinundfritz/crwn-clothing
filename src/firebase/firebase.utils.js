import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyATcPrajGT0cvQdEXxhcz46h-Cd03Seyvc",
  authDomain: "crwn-db-8cd7e.firebaseapp.com",
  databaseURL: "https://crwn-db-8cd7e.firebaseio.com",
  projectId: "crwn-db-8cd7e",
  storageBucket: "crwn-db-8cd7e.appspot.com",
  messagingSenderId: "90239051197",
  appId: "1:90239051197:web:c2aca84cc9e091e62d1ed4"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
