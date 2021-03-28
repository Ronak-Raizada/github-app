import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAztDmnT7X_pJk3j9gHRP4L-12n2LzlN5M",
    authDomain: "github-app-fb867.firebaseapp.com",
    projectId: "github-app-fb867",
    storageBucket: "github-app-fb867.appspot.com",
    messagingSenderId: "94893030225",
    appId: "1:94893030225:web:69bfcb6cfea94150b4f170",
    measurementId: "G-HQDRMGN4C9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics()
export default firebase;