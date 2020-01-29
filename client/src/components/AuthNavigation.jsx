import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'


export default function AuthNavigation () {
    function logOut() {

    }

    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="leftNav">
                        <Link to="/">DAD JOKES?</Link>
                    </div>
                    <div className="rightNav">
                        <Link onClick={logOut}>Logout</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}