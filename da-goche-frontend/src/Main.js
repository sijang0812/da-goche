import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
// import homeLogo from './img/homeLogo.png';
// import homeDlvryBtn from './img/homeDlvryBtn.png';
// import homeRstrntBtn from './img/homeRstrntBtn.png';

export default function Main({ categories }) {
  const [depth, setDepth] = useState(1);

  return (
    <div className="bg">
      <div className="divLogo">
        <p className="logo">DA GOCHE</p>
        <p id="pQstn">수리할 장소는 어디입니까?</p>
        <div onClick={() => setDepth(2)}>
          {depth} == 1
          ?   
          {categories.map(category => {
            return <Question category={category} />
          })}
          :
          {categories.sub_id.map(sub_id => {
            <div className="divAnswr">
              <img className="imgAnswr" src={require( './img/' +  sub_id + '.png').default} />
              <p className="pAnswr">{sub_id}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}