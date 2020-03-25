import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notFoud/notFound.css';


function NotFound() {

    return (
        <div className="not-found-page">
            <div className="container">
                <h1>404 NOT FOUND</h1>
                <h2>page not found</h2>
                <Link className="link" to="/">
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;