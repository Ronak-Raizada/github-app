import firebase from '../config/firebase-config';
const githubProvider = new firebase.auth.GithubAuthProvider()
githubProvider.addScope('repo');
githubProvider.setCustomParameters({
    'allow_signup': 'false'
  });
const socialMediaAuth = ()=>{
    return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then((result)=>{
        return result
    })
    .catch((error)=>error)
}

export default socialMediaAuth;