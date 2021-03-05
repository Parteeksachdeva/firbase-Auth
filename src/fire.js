import firebase from "firebase"

const firebaseConfig={
    apiKey: "AIzaSyBafd8GbAxCsOZPfuP-v9Q74WOTwU77aOk",
    authDomain: "auth-authentication.firebaseapp.com",
    projectId: "auth-authentication",
    storageBucket: "auth-authentication.appspot.com",
    messagingSenderId: "720527806207",
    appId: "1:720527806207:web:2e57494c91bc27868486ca"
};

const fire= firebase.initializeApp(firebaseConfig)
export default fire;