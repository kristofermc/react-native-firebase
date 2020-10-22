import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvuseTPYGW_iZdCEuFaDAxexaLq3GWIBM",
  authDomain: "m4-appauth.firebaseapp.com",
  databaseURL: "https://m4-appauth.firebaseio.com",
  projectId: "m4-appauth",
  storageBucket: "m4-appauth.appspot.com",
  messagingSenderId: "978388161849",
  appId: "1:978388161849:web:8c96a3610530fafc6544e8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
