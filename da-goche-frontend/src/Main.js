/*
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
          {depth === 1
          ?   
          <div>
            {categories.map(category => {
              return <Question category={category} key={category.id}/>
            })}
          </div>
          :
          <div>
            {categories.map(category => {
              return <Question category={category} key={category.id}/>
            })}
          </div>
          }
        </div>
      </div>
    </div>
  )
}
*/
/*
import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import Main2 from './Main2';

export default function Main({ categories }) {
  const [depth, setDepth] = useState(1);

  function clickLogo(param) {
    
  }

  return (
    <div className="bg">
      <div className="divLogo">
        <p className="logo">DA GOCHE</p>
        <p id="pQstn">수리할 장소는 어디입니까?</p>
        <div onClick={clickLogo}>
          {categories.map( category => {
            return <Question category={category} key={category.id} onClick = {() => clickLogo(category.sub)}/>
          })}
        </div>
      </div>
    </div>
  )
}
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';

export default function Main({categories}) {
  const [logos, setLogos] = useState({categories});

  //const clickLogo = () => {
    //setLogos(category.sub);
  //};
  function clickLogo(param) {
    setLogos(param);
  }

  return (
    <div className="bg">
      <div className="divLogo">
        <p className="logo">DA GOCHE</p>
        <p id="pQstn">수리할 장소는 어디입니까?</p>
          {categories.map( category => (
            <Question category={category} key={category.id} />
          ))}
        <div onClick={() => clickLogo({categories.sub.id})}>
        </div>
      </div>
    </div>
  )
}