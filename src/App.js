import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import { AuthContext } from './store/Auth';
import Home from './components/Home';
import Login from './components/Login';
import Path from './components/Path';



function PrivateRoute({ children, ...rest }) {
    const isLogin = useContext(AuthContext).isLogin;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
const App = () => {

    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/path" component={Path} />
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;