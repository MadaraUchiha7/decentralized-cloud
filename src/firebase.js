// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoXl4CJNSlDCOzd4DVdN31aMqFpusMRq8",
  authDomain: "decentralized-cloud-62351.firebaseapp.com",
  projectId: "decentralized-cloud-62351",
  storageBucket: "decentralized-cloud-62351.appspot.com",
  messagingSenderId: "372982184738",
  appId: "1:372982184738:web:f26a577ae29583ffe3837b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.auth()