import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAN2hfH7zYvPtcDK8S0EubmpIy3szHUxQU",
    authDomain: "crown-e-store.firebaseapp.com",
    projectId: "crown-e-store",
    storageBucket: "crown-e-store.appspot.com",
    messagingSenderId: "717285606513",
    appId: "1:717285606513:web:2d77d09a81f3d6cfd8c7d0",
    measurementId: "G-L8WRT836B7"
  };
  
  export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if(!userAuth)
      return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

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

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;