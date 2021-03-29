/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import socialMediaAuth from '../Auth/socialMediaAuth';
import firebase from '../config/firebase-config';
export const AuthContext = React.createContext({
    isLogin: false,
    token: '',
    repos: [],
    login: () => { },
    logout: () => { },
})

export default props => {
    const [signIn, setSignIn] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const [repositories, setRepositories] = useState([]);

    const getRepositories = async (userName) => {
        const { Octokit } = require("@octokit/core");
        const octokit = new Octokit({ auth: accessToken });

        const repoResponse = await octokit.request(`GET /users/${userName}/repos`);
        if (repoResponse.status === 200) {

            return repoResponse.data;
        }
        else {
            alert("user not found")
        }


    }

    const loginHandeler = async (cb) => {
        const result = await socialMediaAuth()
        const credential = result.credential;

        if (credential) {
            const token = credential.accessToken;
            const user = result.additionalUserInfo.username;

            setAccessToken(token)
            localStorage.setItem('token', accessToken)
            if ('token' in localStorage) {
                const data = await getRepositories(user)
                if (data.length) {
                    setRepositories(data)
                }
                setSignIn(true)
                cb()
            }
        }

    }

    const logOutHandeler = async (cb) => {
       await firebase.auth().signOut().then(() => {
            console.log("sign out successfull")
            setSignIn(false)
            localStorage.removeItem('token')
            cb()
        }).catch((error) => {
            console.log(error)
        });
    }

    return <AuthContext.Provider value={{
        isLogin: signIn,
        token: accessToken,
        repos: repositories,
        login: loginHandeler,
        logout: logOutHandeler,
    }}>
        {props.children}

    </AuthContext.Provider>

}