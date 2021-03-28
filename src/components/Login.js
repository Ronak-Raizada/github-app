
import React, { useContext } from 'react';
import { AuthContext } from '../store/Auth';
import Button from '@material-ui/core/Button';
import {
    useHistory,
    useLocation
} from "react-router-dom";
const Login = () => {
    const login = useContext(AuthContext).login;
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Button variant="contained" color="primary" onClick={() => login(() => history.replace(from))}>
                Login with Github
            </Button>
        </div>

    )
}

export default Login;