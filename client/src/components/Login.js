import React, { useState, useRef } from 'react';
import axios from 'axios';
import { withAuth } from '../_axios_/index';

function Login(props) {

    const initialLoginFormState = {
     usernameRef: useRef(),
     passwordRef: useRef()
    }

    const [credentials, setCredentials] = useState(initialLoginFormState);

    const loginUser = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3300/api/auth/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/jokes');
            })
            .catch(error => {
                console.log(error.response.data.message);
            });
    }

    const handleChange = event => {
      setCredentials({
            ...credentials,
        [event.target.name]: event.target.value
        })
    };

    return (
        <div>
            <form onSubmit={loginUser}>
            <div className="input-group">
                    <label>Username</label>
                    <input 
                        type="text" 
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input 
                        type="text" 
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="login-btn-div">
                    <button className="btn login-btn">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;