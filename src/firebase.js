import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQ0qIBy-mD6X11gYE2sPwfyMJiiALM7RM",
    authDomain: "netflix-clone-4fd81.firebaseapp.com",
    projectId: "netflix-clone-4fd81",
    storageBucket: "netflix-clone-4fd81.appspot.com",
    messagingSenderId: "340453163789",
    appId: "1:340453163789:web:e19e523c225f2bcbba2644"
  };

const firebaseapp=firebase.initializeApp(firebaseConfig)
const db = firebaseapp.firestore();
const auth=firebase.auth();

export {auth}
export default db