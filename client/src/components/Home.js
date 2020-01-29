import React, { PureComponent } from 'react';
import { Route, Link, } from 'react-router-dom';
import Navigation from './Navigation';
import icon from '../assets/icon.svg';

export default function Home () {
    return (
        <>
            <Navigation />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="left-section">
                                <h1>Tell dad jokes easily.</h1>
                                <p>A collection of amazing dad joke to get people to roll their eyes while smiling</p>
                                <Link to="/signup"className="btn btn-primary">Get Started</Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="right-section">
                                <img className="img-fluid" src={icon} alt="Dad jokes SVG" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}