import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Login from './Login';
import FriendsList from './Jokes';
import PrivateRoute from './PrivateRoute';

export function Wall(props) {
    const onLogout =() => {
        localStorage.clear();
        props.history.replace('/');
    };

    return (
        <div className="wall">
            <nav className="navbar">
                <div>
                    <NavLink exact to="/login">Login</NavLink>
                    <NavLink to="/friends_list">FriendList</NavLink>
                </div>
            </nav>
            <section className="bg-image-section">
                <div className="bg-text">FRIENDS</div>
            </section>
            <main>
                <Route exact path="/login" component={Login} />
                {/* <Route exact path="/friends_list" render={props => withAthCheck(FriendsList, props)} /> */}
                <PrivateRoute exact path="/friends_list" component={FriendsList} onLogout={onLogout}/>
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