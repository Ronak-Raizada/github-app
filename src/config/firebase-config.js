import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBU1voukrajqsJzVTIgb_WOjj3Wgw4eWCg",
    authDomain: "github-app-8f80c.firebaseapp.com",
    projectId: "github-app-8f80c",
    storageBucket: "github-app-8f80c.appspot.com",
    messagingSenderId: "62191482859",
    appId: "1:62191482859:web:036839b366736ca1e70bae",
    measurementId: "G-L6MN9ZMRQF"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics()
export default firebase;