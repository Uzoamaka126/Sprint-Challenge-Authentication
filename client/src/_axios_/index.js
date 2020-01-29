import axios from 'axios';

export const withAuth = () => {
    const token = localStorage.getItem('token');

    const instance = axios.create({
        baseURL: 'http://localhost:3300',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`
        }
    });
    return instance;
}