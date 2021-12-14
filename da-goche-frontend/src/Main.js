import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import List from './List';

export default function Main({categories}) {
  var [logos, setLogos] = useState({categories}.categories);
  const [selectId, setSelectId] = useState("id");
  let cntClick = 0;

  function clickLogo(paramId, paramSub) {
    console.log("paramId", paramId);
    console.log("paramSub", paramSub);
    console.log("logos", logos);
    cntClick++;
    console.log("cntClick", cntClick);
    
    setLogos(paramSub);
    console.log("logos", logos);
  }

  return (
    cntClick === 0
    ?
    <div className="bg">
      <div className="divLogo">
        <p className="logo">DA GOCHE</p>
        <p id="pQstn">수리할 장소는 어디입니까?</p>
          {logos.map( 
            category => {
              return (
                <div className="divAnswr" key = {category.id}>
                  {/* <Question category = {category} key = {category.id} /> */}
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.id, category.sub)}/>
                  <p className="pAnswr">{category.name}</p>
                </div>
              )
            }
          )}
      </div>
    </div>
    :
    // <>
    //   <Router>
    //     <Routes>
    //       <Route path='/list' element={<List selectId={selectId} />} />
    //       <Route render={() => <div className='error'>에러 페이지</div>} />
    //     </Routes>
    //   </Router>
    // </>
    <List selectId = {selectId} />
  )
}