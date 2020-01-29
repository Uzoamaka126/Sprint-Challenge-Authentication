import React, { useState } from 'react';
import { login } from '../_axios_/auth';
import axios from 'axios';
import { withAuth } from '../_axios_/index'


export default function Login (props) {
    const { history } = props;
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        setUser({ 
            ...user, 
            [event.target.name]: event.target.value 
        });
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        withAuth()
        .post('https://dad-jokes-app.herokuapp.com/api/auth/login', user)
        .then(res => {
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
                <h4 className="glow">Login</h4>
            </nav>
            <form onSubmit={event => handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" onChange={event => handleChange(event)} name="username" className="form-control" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Password</label>
                    <input type="password" onChange={event => handleChange(event)} name="password" className="form-control" id="password" />
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}