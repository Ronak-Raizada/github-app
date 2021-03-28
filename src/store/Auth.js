/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
export const AuthContext = React.createContext({
    isLogin: false,
    token: '',
    repos: [],
    login: () => { },
    logout: () => { },
})

export default props => {
    const [signIn, setSignIn] = useState(false);
    const [accessToken] = useState('6fe296f891b6eacefa2b840b5b5ab6224468d34c');
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

    const setRepositoryData = async (userName, cb) => {
        const data = await getRepositories(userName)
        if (data.length) {
            localStorage.setItem('token', accessToken)
            if ('token' in localStorage) {
                setSignIn(true)
                setRepositories(data)
                cb()

            }

        }
        else
        {
            alert("user no found")
        }

    }

    const loginHandeler = (userName, cb) => {
        if (userName === '') {
            alert("username should not be empty")
            return
        }

        setRepositoryData(userName, cb)

    }

    const logOutHandeler = (cb) => {
        setSignIn(false)
        localStorage.removeItem('token')
        cb()
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