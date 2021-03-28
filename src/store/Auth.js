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
    const [accessToken] = useState('3b6649047e32d6e9075cb7a4818d3cdebb43e4a9');
    const [repositories, setRepositories] = useState([]);

    const getRepositories = async () => {
        const { Octokit } = require("@octokit/core");
        const octokit = new Octokit({ auth: accessToken });
        const response = await octokit.request('GET /user')
        if (response.status === 200) {
            const user = response.data.login;
            const repoResponse = await octokit.request(`GET /users/${user}/repos`);
            if (repoResponse.status === 200) {
                return repoResponse.data
            }
        }

    }

    const setRepositoryData = async()=>{
        const data = await getRepositories()
        setRepositories(data)
    }

    const loginHandeler = (cb) => {
        localStorage.setItem('token',accessToken)
        if ('token' in localStorage) {
            setSignIn(true)
            cb()
            setRepositoryData()
        }

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