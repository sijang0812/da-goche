import React from 'react';
import './App.css';
import homeLogo from './img/homeLogo.png';
import homeDlvryBtn from './img/homeDlvryBtn.png';
import homeRstrntBtn from './img/homeRstrntBtn.png';

function Main() {
  return (
    <div className="home" id="bodyHome">
      <div className="home" id="divHome">
        <img className="imgLogo" id="imgHomeLogo" src={homeLogo} alt="로고" />
        <div id="divHomeDlvryBtn">
          <img id="imgHomeDlvryBtn" src={homeDlvryBtn} alt="배달주문" />
        </div>
        <div id="divHomeRstrntBtn">
          <img id="imgHomeRstrntBtn" src={homeRstrntBtn} alt="레스토랑예약" />
        </div>
      </div>
    </div>
  );
}

export default Main;