import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './PrivateRoute';
import SignUp from './components/SignUp';
import Jokes from './components/Jokes'

export function Wall(props) {
    // const onLogout =() => {
    //     localStorage.clear();
    //     props.history.replace('/');
    // };

    return (
        <div className="wall">
            <Home />
            <main>
                {/* <Route exact path="/" component={Home} /> */}
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <PrivateRoute exact path="/" component={Jokes} />
            </main>
        </div>
    );
}

function withAthCheck(Component, props) {
    if (localStorage.getItem('token')) {
        return <Component {...props} />
    }
    return <Redirect to='/' />;
}

export default withRouter(Wall);