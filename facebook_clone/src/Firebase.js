import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKrSUfU_j84ZOk01Exi2qYn8jCG-EzUOE",
  authDomain: "facebook-clone-5bc2d.firebaseapp.com",
  projectId: "facebook-clone-5bc2d",
  storageBucket: "facebook-clone-5bc2d.appspot.com",
  messagingSenderId: "65987719930",
  appId: "1:65987719930:web:5e3f913ee195c13ff34f43",
  measurementId: "G-S3HR2Q8VWJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export  { auth, provider };
export default db;
