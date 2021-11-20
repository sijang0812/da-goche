/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
//import logo from './logo.svg';
//import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import homeLogo from './img/homeLogo.png';
import homeDlvryBtn from './img/homeDlvryBtn.png';
import homeRstrntBtn from './img/homeRstrntBtn.png';
import main from "./App"
import delivery from "./Delivery"
import restaurant from "./App"
import './App.css';
import { Routes } from "react-router";
//import {useEffect, useState} from "react";

function App() { 
  /*
  const [message, setMessage] = useState([]);
  useEffect(() => { 
    fetch("/main").then((response) => { return response.json(); }).then(function (data) { setMessage(data); }); }, []);
  */
    /*
    return ( <div className="App"> 
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p> Edit <code>src/App.js</code> and save to reload. </p> 
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> 
                <ul> {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)} </ul> </header> 
             </div> 
           ); 
    */
    return (
            <Router> 
              <div className="home" id="bodyHome">
                <div className="home" id="divHome">
                  <Link to="/Main">
                    <img className="imgLogo" id="imgHomeLogo" src={homeLogo} alt="로고" />
                  </Link>
                  <div id="divHomeDlvryBtn">
                    <Link to="/delivery">
                      <img id="imgHomeDlvryBtn" src={homeDlvryBtn} alt="배달주문" />
                    </Link>
                  </div>
                  <div id="divHomeRstrntBtn">
                    <Link to="/restaurant">
                      <img id="imgHomeRstrntBtn" src={homeRstrntBtn} alt="레스토랑예약" />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <Routes>
                  <Route exact path="/" componect={main} />
                  <Route path="/delivery" componect={delivery} />
                  <Route path="/restaurant" componect={restaurant} />
                </Routes>
              </div>
             </Router>
           ); 
} 

export default App;