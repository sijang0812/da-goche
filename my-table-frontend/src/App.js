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
import homeLogo from './img/homeLogo.png';
import homeDlvryBtn from './img/homeDlvryBtn.png';
import homeRstrntBtn from './img/homeRstrntBtn.png';
import './App.css';
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
    return ( <div className="home" id="bodyHome">
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

export default App;