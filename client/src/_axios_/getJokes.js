import { withAuth } from './index';


export const getJokes = () => {
    withAuth()
        .get('http://localhost:3300/api/jokes')
        .then(res => {
            console.log(res.data);
        })
        .catch(err) {
            console.log(err);
        }
}