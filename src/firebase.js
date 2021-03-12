import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBJQQL86Egrx2Qu0cZONCnz-WGdSS3_OLU",
    authDomain: "slack-clone-sz.firebaseapp.com",
    projectId: "slack-clone-sz",
    storageBucket: "slack-clone-sz.appspot.com",
    messagingSenderId: "516326495242",
    appId: "1:516326495242:web:578339f8c0f0c239a6fbf3"
  };
      
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;