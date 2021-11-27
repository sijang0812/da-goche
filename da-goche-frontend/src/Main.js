import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
// import homeLogo from './img/homeLogo.png';
// import homeDlvryBtn from './img/homeDlvryBtn.png';
// import homeRstrntBtn from './img/homeRstrntBtn.png';

function Main() {
  return (
    // <div className="home" id="bodyHome">
    //   <div className="home" id="divHome">
    //     <img className="imgLogo" id="imgHomeLogo" src={homeLogo} alt="로고" />
    //     <Link to="/main/delivery">
    //       <div id="divHomeDlvryBtn">
    //         <img id="imgHomeDlvryBtn" src={homeDlvryBtn} alt="배달주문" />
    //       </div>
    //     </Link>
    //     <Link to="/main/restaurant">
    //       <div id="divHomeRstrntBtn">
    //         <img id="imgHomeRstrntBtn" src={homeRstrntBtn} alt="레스토랑예약" />
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    <div className="bg">
      <div className="divLogo">
        <p className="logo">DA GOCHE</p>
        <div className="divAnswr">화장실</div>
        <div className="divAnswr">주방</div>
        <div className="divAnswr">방</div>
        <div className="divAnswr">거실</div>
        <div className="divAnswr">다용도실</div>
        <div className="divAnswr">실외</div>
      </div>
    </div>
  );
}

export default Main;