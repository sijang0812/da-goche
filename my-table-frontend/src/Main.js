import React from 'react';
import './App.css';
import homeLogo from './img/homeLogo.png';
import homeDlvryBtn from './img/homeDlvryBtn.png';
import homeRstrntBtn from './img/homeRstrntBtn.png';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="home" id="bodyHome">
      <div className="home" id="divHome">
        <img className="imgLogo" id="imgHomeLogo" src={homeLogo} alt="로고" />
        <Link to="/main/delivery">
          <div id="divHomeDlvryBtn">
            <img id="imgHomeDlvryBtn" src={homeDlvryBtn} alt="배달주문" />
          </div>
        </Link>
        <Link to="/main/restaurant">
          <div id="divHomeRstrntBtn">
            <img id="imgHomeRstrntBtn" src={homeRstrntBtn} alt="레스토랑예약" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Main;