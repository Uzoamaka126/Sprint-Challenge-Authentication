import React, { useState } from 'react';
import { login } from '../_axios_/auth';

export default function Login (props) {
    console.log(props)
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        login(user);
        props.history.push('/jokes');
    }

    return (
        <div>
            <form>
                <h6>Login to see jokes!</h6>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input name="username" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input name="password" className="form-control" id="password" />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}