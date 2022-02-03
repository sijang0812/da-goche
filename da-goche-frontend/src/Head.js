// eslint-disable-next-line
import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import homeLogo from './img/homeLogo.png';
import Main from './Main';

function Head() {
    return (
        <div>
            <title>DA-GOCHE navigation</title>
            <Link to="/main">
                <div className="divLogo">
                    <p className="logo">DA GOCHE</p>
                </div>
            </Link>
            <div className="divTopMenu">
                <ul>
                    <li className="liMenu">전체 카테고리</li>
                    <ul className="ulDropMenu">
                        <Link to="/bathroom">
                        <li>욕실</li>
                        </Link>
                        <Link to="/bathroom">
                        <li>주방</li>
                        </Link>
                        <Link to="/bathroom">
                        <li>거실</li>
                        </Link>
                        <Link to="/bathroom">
                        <li>다용도실/베란다</li>
                        </Link>
                        <Link to="/bathroom">
                        <li>방/침실</li>
                        </Link>
                        <Link to="/bathroom">
                        <li>마당/정원</li>
                        </Link>
                        <Link to="/bathroom">
                        <li>기타</li>
                        </Link>
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default Head;