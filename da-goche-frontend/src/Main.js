/*
import logo from './logo.svg';
import './App.css';
import React from 'react';

function Restaurant() { 
  // const [message, setMessage] = useState([]);
  // useEffect(() => { 
  //   fetch("/Delivery").then((response) => { return response.json(); }).then(function (data) { setMessage(data); }); }, []);
    return ( 
      <div className="App"> 
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p> Edit <code>src/App.js</code> and save to reload. </p> 
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> 
        <ul> {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)} </ul>
        </header>
      </div> 
    ); 
}

export default Restaurant;
*/

/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Question from './Question';
import List from './List';
import Head from './Head';

export default function Main({categories}) {
  var [logos, setLogos] = useState({categories}.categories);
  const [selectId, setSelectId] = useState("id");
  const [cntClick, setCntClick] = useState(0);//let cntClick = 0;

  function clickLogo(paramId, paramSub) {
    console.log("paramId", paramId);
    console.log("paramSub", paramSub);
    console.log("logos", logos);
    setCntClick(cntClick + 1);//cntClick++;
    console.log("cntClick", cntClick);
    
    setLogos(paramSub);
    console.log("logos", logos);
  }

  return (
    cntClick < 2
    ?
    <div className="bg">
      <Head/>
      <div className="divBody">
        <p id="pQstn">수리할 장소는 어디입니까?</p>
          {logos.map( 
            category => {
              return (
                <div className="divAnswr" key = {category.id}>
                  <Question category = {category} key = {category.id} />
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.id, category.sub)}/>
                  <p className="pAnswr">{category.name}</p>
                </div>
              )
            }
          )}
      </div>
    </div>
    :
    <Link to="/list">
      <List selectId = {selectId}/>
    </Link>
  )
}
*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import List from './List';
import Head from './Head';

export default function Main({categories}) {
  var [logos, setLogos] = useState({categories}.categories);
  const [selectId, setSelectId] = useState("id");
  const [cntClick, setCntClick] = useState(0);//let cntClick = 0;
  const url = "http://localhost:3000/list";
  let list = [{ tlsId : 'test57', tlsNm : '테스트57'}];

  function clickLogo(paramId, paramSub) {
    console.log("paramId", paramId);
    console.log("paramSub", paramSub);
    console.log("logos", logos);
    setCntClick(cntClick + 1);//cntClick++;
    console.log("cntClick", cntClick);
    
    setLogos(paramSub);
    console.log("logos", logos);
  }

  function fnCallList(selectId) {
    // java -> react
    axios.get(url)
    .then(function(response){
      setCntClick(cntClick + 1);
      console.log("성공");
      list = response.data; //setList(response.data);
      //setList(JSON.stringify(response.data));
      console.log("**list11111**" + list);
      console.log("**list111111**" + list[0].tlsNm);

      <List list = {list} />
    })
    .catch(function(error){
      console.log("실패");
    })
  }

  return (
    <div className="bg">
      <Head/>
      <div className="divBody">
        <p id="pQstn">수리할 장소는 어디입니까?</p>
          {logos.map( 
            category => {
              return (
                cntClick == 0
                ?
                <div className="divAnswr" key = {category.id}>
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.id, category.sub)} />
                  <p className="pAnswr">{category.name}</p>
                </div>
                :
                <div className="divAnswr" key = {category.id}>                  
                  <Link to="/list">
                  {/* <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => fnCallList(selectId) } /> */}
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => <List list = {list} /> } />
                  <p className="pAnswr">{category.name}</p>
                  </Link>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}