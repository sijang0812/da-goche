import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './List';

export default function Main({categories}) {
  var [logos, setLogos] = useState({categories}.categories);
  const [selectId, setSelectId] = useState("id");
  var cntClick = 0;

  function clickLogo(paramId, paramSub) {
    console.log("paramId", paramId);
    console.log("paramSub", paramSub);
    console.log("logos", logos);
    cntClick++;
    console.log("cntClick", cntClick);
    if(cntClick === 1) {
      setLogos(paramSub);
      console.log("logos", logos);
    } else {
      alert(paramId);
      return (
        <>
          <Router>
            <Routes>
              <Route path='/list' element={<List selectId={selectId} />} />
              <Route render={() => <div className='error'>에러 페이지</div>} />
            </Routes>
          </Router>
        </>
      );
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
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } 
                  onClick={() => clickLogo(category.id, category.sub)}/>
                  <p className="pAnswr">{category.name}</p>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}