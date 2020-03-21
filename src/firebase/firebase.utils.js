import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDCBxrqsuRCCTj75r-nVg58T5ltQkYHHwI",
    authDomain: "crwn-db-6a8b3.firebaseapp.com",
    databaseURL: "https://crwn-db-6a8b3.firebaseio.com",
    projectId: "crwn-db-6a8b3",
    storageBucket: "crwn-db-6a8b3.appspot.com",
    messagingSenderId: "948398569911",
    appId: "1:948398569911:web:374ed9454fe488f5f85032"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;