// eslint-disable-next-line
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import homeLogo from './img/homeLogo.png';
import Main from './Main';

function Head() {
    function fnOverDropDownMenu(e) {
        // e.target.style.display = 'red';
        document.getElementById('ulDropMenu').style.display = "block";
    }

    function fnOutDropDownMenu(e) {
        document.getElementById('ulDropMenu').style.display = "none";
    }

    return (
        <div>
            <title>DA-GOCHE navigation</title>
            <Link to="/main">
                <div className="divLogo">
                    <p className="logo">DA GOCHE</p>
                </div>
            </Link>
            <div className="divSearch">
                <select id="selectSearch" name="selectSearch" style={{position: "absolute", background: "white", top: "25%",left: "0%", height: "50%", width: "18%"}}></select>
                <input id="inputSearch" name="inputSearch" style={{position: "absolute", background: "white", top: "25%", left: "19%", height: "45%", width: "55%"}}></input>
            </div>
            <div className="divTopMenu">
                <ul>
                    <ul className="liMenu" onMouseOver={fnOverDropDownMenu} onMouseOut={fnOutDropDownMenu}><br/><span style={{fontSize: "40pt"}}>&nbsp;≡</span><br/><br/>&nbsp;카테고리</ul>
                    <ul id="ulDropMenu" className="ulDropMenu">
                        <Link to="/bathroom">
                        <ul>욕실</ul>
                        </Link>
                        <Link to="/bathroom">
                        <ul>주방</ul>
                        </Link>
                        <Link to="/bathroom">
                        <ul>거실</ul>
                        </Link>
                        <Link to="/bathroom">
                        <ul>다용도실/베란다</ul>
                        </Link>
                        <Link to="/bathroom">
                        <ul>방/침실</ul>
                        </Link>
                        <Link to="/bathroom">
                        <ul>마당/정원</ul>
                        </Link>
                        <Link to="/bathroom">
                        <ul>기타</ul>
                        </Link>
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default Head;