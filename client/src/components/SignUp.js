import React, { useState, useRef } from 'react';
import { register, login } from '../_axios_/auth';

export default function SignUp (props) {
    // const [inputChange, setInputChange] = useState({
    //     username: "",
    //     password: ""
    // });

    // function handleChange(event) {
    //     setInputChange({ ...inputChange, [event.target.name]: event.target.value })
    // }
    const usernameRef = useRef();
    const passwordRef = useRef();

    const user ={
        username: usernameRef.current.value,
        password: passwordRef.current.value,

    }

    function handleSubmit(event) {
        event.preventDefault();
        register(user);
        props.history.push('/jokes');
    }

    return (
        <div>
            <form>
                <h6>Sign up to see jokes!</h6>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input ref={usernameRef} name="username" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input ref={passwordRef} name="password" className="form-control" id="password" />
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    )
}