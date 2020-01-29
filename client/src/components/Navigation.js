import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'


export default function Navigation () {
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="left-nav">
                        <Link to="/" className="glow">DAD JOKES?</Link>
                    </div>
                    <div className="right-nav">
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/jokes">Jokes</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}