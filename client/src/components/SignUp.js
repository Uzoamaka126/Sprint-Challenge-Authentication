import React, { useState, useRef } from 'react';
import { register, login } from '../_axios_/auth';

export default function SignUp (props) {
    console.log(props)
    const { history } = props;

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        register(user, history);
        // props.history.push('/jokes');
    }

    return (
        <div>
            <nav className="bg-blue">
                <h4 className="glow">Sign up</h4>
            </nav>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} name="username" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Password</label>
                    <input onChange={handleChange} name="password" className="form-control" id="password" />
                </div>
                <button className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}