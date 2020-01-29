import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'


export default function Navigation () {
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="leftNav">
                        <Link to="/">DAD JOKES?</Link>
                    </div>
                    <div className="rightNav">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/jokes">Jokes</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}