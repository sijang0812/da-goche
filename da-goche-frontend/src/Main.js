import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

export default function Main({categories}) {
  const [logos, setLogos] = useState({categories}.categories);
  const [cntClick, setCntClick] = useState(0);
  
  function clickLogo(param) {
    const temp = cntClick + 1;
    console.log("temp", temp);
    setCntClick(temp);
    console.log("cntClick", cntClick);
    console.log("logos", logos);
    if(cntClick === 1) {
      setLogos(param);
    } else {
      alert("메인"); 
    }
  }

  return (
    <div className="bg">
      <div className="divLogo">
        <p className="logo">DA GOCHE</p>
        <p id="pQstn">수리할 장소는 어디입니까?</p>
          {logos.map( 
            category => {
              return (
                <div className="divAnswr" key = {category.id}>
                  {/* <Question category = {category} key = {category.id} /> */}
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.sub)}/>
                  <p className="pAnswr">{category.name}</p>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}