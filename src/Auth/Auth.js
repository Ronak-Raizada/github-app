import React from 'react'
import Login from '../components/Login'
import Home from '../pages/Home'

function Auth(props) {
    
  
    console.log(props.token)
    if (props.token === '') {
        return (
            <Login setToken = {props.setToken} />
        );
    }
    return (
        <Home setToken = {props.setToken}/>
    );
}

export default Auth;