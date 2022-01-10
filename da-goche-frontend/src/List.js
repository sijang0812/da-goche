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
  //const [list, setList] = useState([]);
  let list = [{ tlsId : 'test', tlsNm : '테스트'}];
  console.log("**list0**" + list[0].tlsNm);
  const url = "http://localhost:3000/list";
  list = [{ tlsId : 'testa', tlsNm : '테스트a'}];
  console.log("**list**" + list);
  console.log("**list0**" + list[0].tlsNm);
  axios.get(url)
  .then(function(response){
    list = [{ tlsId : 'testb', tlsNm : '테스트b'}];
    console.log("**list**" + list);
    console.log("**list0**" + list[0].tlsNm);
    console.log("성공");
    list = response.data; //setList(response.data);
    //setList(JSON.stringify(response.data));
    console.log("**list**" + list);
    console.log("**list0**" + list[0].tlsNm);
  })
  .catch(function(error){
    console.log("실패");
  })

  return (
    <div className="bg">
      <Head/>
      <div className="divBody">
        {list.map( 
          item => (
            <Item item = {item} key={item.tlsId} />
            )
        )}
      </div>
    </div>
  )
}