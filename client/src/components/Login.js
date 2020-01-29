import React, { useRef } from 'react';
import { login } from '../_axios_/auth';

export default function Login (props) {
    
    const usernameRef = useRef();
    const passwordRef = useRef();

    const user ={
        username: usernameRef.current.value,
        password: passwordRef.current.value,

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
                    <input ref={usernameRef} name="username" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input ref={passwordRef} name="password" className="form-control" id="password" />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}