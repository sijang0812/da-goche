// eslint-disable-next-line
import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import homeLogo from ;

function Head() {
    return (
        <div>
            <img className="imgLogo" id="imgHomeLogo" src={homeLogo} alt="로고" />
            <Link to="/main/restaurant">
                <button>레스토랑예약</button>
            </Link>
            <Link to="/main/delivery">
                <button>배달주문</button>
            </Link>
            <Link to="/main">
                <button>메인</button>
            </Link>
        </div>
    );
}

export default Head;