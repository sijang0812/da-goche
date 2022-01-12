/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Head from './Head';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Main({selectId}) {
  const [list, setList] = useState("");

  function callback(param) {
    setList(param);
  }

  useEffect(
    () => {
      axios({
        srcId  : {selectId},
        url    : '/list',
        method : 'GET'
      }).then((res) => {
        callback(res.data);
      })
    }, []
  );

  return (
    <div className="bg">
      <Head/>
      <div className="divBody">
        {/* <p id="pQstn">{selectId}</p>
        <p id="pQstn">{list}</p> }
        <table>
          ${list}.

            <tr>
          
            </tr>
        </table>
      </div>
    </div>
  )
}
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Head from './Head';
import Item from './Item';

export default function Main({selectId}) {
  console.log({selectId});
  const [cntClick, setCntClick] = useState(0);
  let list = [{ tlsId : 'test', tlsNm : '테스트'}];
  const url = "http://localhost:3000/list";
  console.log("**list0**" + list);
  console.log("**list0**" + list[0].tlsNm);
  axios.get(url)
  .then(function(response){
    setCntClick(cntClick + 1);
    console.log("성공");
    list = response.data; //setList(response.data);
    //setList(JSON.stringify(response.data));
    console.log("**list1**" + list);
    console.log("**list1**" + list[0].tlsNm);
  })
  .catch(function(error){
    console.log("실패");
  })
  return (
    <div className="bg">
      <Head/>
      <div className="divBody">
        {list.map( 
          item => {
            return (
            <Item item = {item} key={item.tlsId} />
            )
          }
        )}
      </div>
    </div>
  )
}