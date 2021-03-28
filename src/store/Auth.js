/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
export const AuthContext = React.createContext({
    isLogin: false,
    login: () => { },
    logout: () => { },
})

export default props => {
    const [signIn, setSignIn] = useState(false);
    const loginHandeler = (cb) => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'https://github.com/login/oauth/authorize?client_id=Iv1.c2d5e5e8132183d8',
            headers: {
                "Access-Control-Allow-Origin":"*"
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        const token = 'abcd'
        localStorage.setItem('token', token);

        if ("token" in localStorage) {
            setSignIn(true)
            cb()
        }

    }

    const logOutHandeler = (cb) => {
        localStorage.removeItem('token')
        setSignIn(false)
        cb()
    }

    return <AuthContext.Provider value={{
        isLogin: signIn,
        login: loginHandeler,
        logout: logOutHandeler
    }}>
        {props.children}

    </AuthContext.Provider>

}