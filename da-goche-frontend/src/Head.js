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