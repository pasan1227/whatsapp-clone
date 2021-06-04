import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABatsRA23UQM7p4gsnNVGnufDUhVIrczo",
  authDomain: "whatsapp-clone-1af98.firebaseapp.com",
  projectId: "whatsapp-clone-1af98",
  storageBucket: "whatsapp-clone-1af98.appspot.com",
  messagingSenderId: "824179076345",
  appId: "1:824179076345:web:d9307a320c870534ca0628",
  measurementId: "G-HWPXC7WH08"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;