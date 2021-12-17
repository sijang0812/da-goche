// eslint-disable-next-line
import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import homeLogo from './img/homeLogo.png';

function Head() {
    return (
        <div>
            <Link to="/main">
                <div className="divLogo">
                    <p className="logo">DA GOCHE</p>
                </div>
            </Link>
        </div>
    );
}

export default Head;