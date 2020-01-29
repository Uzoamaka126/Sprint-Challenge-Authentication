import { withAuth } from './index';
import axios from 'axios';

export const register = (user, history) => {
    axios
        .post('https://dad-jokes-app.herokuapp.com/api/auth/register', user)
        .then(res => {
            // setAu
            // console.log(res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id);
            history.push('/jokes');
        })
        .catch(error => {
            console.log(error);
            alert('Invalid credentials, please check again or sign up for an account');           
        });
}

export const login = (user, history) => {
    axios
        .post('https://dad-jokes-app.herokuapp.com/api/auth/login', user)
        .then(res => {
            // console.log(res);
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id);
            history.push('/jokes');
        })
        .catch(error => {
            console.log(error);
            alert('Invalid credentials, please check again or sign up for an account');           
        });
}


