import React, { useState } from 'react';
import { register } from '../_axios_/auth';
import axios from 'axios';
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
        // register(user, history);
        // props.history.push('/jokes');
        axios
        .post('https://dad-jokes-app.herokuapp.com/api/auth/register', user)
        .then(res => {
            // setAu
            console.log(res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id);
            history.push('/jokes');
        })
        .catch(error => {
            console.log(error);
            alert('Invalid credentials, please check again or sign up for an account');           
        });
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