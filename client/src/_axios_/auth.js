import { withAuth } from './index';
import axios from 'axios';

export const register = (user, history) => {
    axios
        .post('http://localhost:3300/api/auth/register', user)
        .then(res => {
            // setAu
            console.log(res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userID', res.data.id);
            history.push('/jokes');
        })
        .catch(error => {
            console.log(error);
            alert('Invalid credentials, please check again or sign up for an account');           
        });
}

export const login = user => {
    axios
        .post('http://localhost:3300/api/auth/login', user)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userID', res.data.id);
        })
        .catch(error => {
            console.log(error);
            alert('Invalid credentials, please check again or sign up for an account');           
        });
}


