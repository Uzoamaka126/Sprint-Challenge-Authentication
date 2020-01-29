import React, { PureComponent } from 'react';
import { Route, } from 'react-router-dom';
import Navigation from './Navigation';
import icon from '../assets/icon.svg';

export default function Home () {
    return (
        <>
            <Navigation />
            <section>
                <div>
                    <h1>Tell dad jokes easily now</h1>
                    <div>
                        <p>A collection of amazing dad joke to get people to roll their eyes while smiling</p>
                    </div>
                    <div>
                        <button>Get Started</button>
                    </div>
                </div>
                <div>
                   <img src={icon} alt="Dad jokes SVG" /> 
                </div>
            </section>
        </>
    )
}