import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import icon from '../assets/icon.svg';
import { withAuth } from '../_axios_/index';
export default function Jokes () {
    const [isLoading, setIsLoading] = useState(false);
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        withAuth()
            .get('https://icanhazdadjoke.com/')
            .then(res => {
                console.log(res)
                setJokes(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    if(!jokes || !isLoading) return <div>No jokes Available. Did you forget to login?</div>
    
    return (
        <>
            <Navigation />
            <section>
                <div className="container">
                   <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div>
                            <p>A collection of amazing dad joke to get people to roll their eyes while smiling</p>
                        </div>
                        {jokes.map(joke => (
                            <li></li>
                        ))}
                   </div>
                    </div>
                </div>
            </section>
        </>
    )
}