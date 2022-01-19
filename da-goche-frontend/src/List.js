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

export default function List({category}) {
  console.log("테스트1",category);
  // axios.get(url)
  // .then(function(response){
  //   setCntClick(cntClick + 1);
  //   console.log("성공");
  //   list = response.data; //setList(response.data);
  //   //setList(JSON.stringify(response.data));
  //   console.log("**list1**" + list);
  //   console.log("**list1**" + list[0].tlsNm);
  // })
  // .catch(function(error){
  //   console.log("실패");
  // })
  var list2 = [{tlsId:'a', tlsNm:'1'},{tlsId:'b', tlsNm:'2'}];
  return (
    <div className="bg">
      <Head/>
      <div className="divBody">
        {list2.map( 
          item2 => {
            return (
            <Item item = {item2} key={item2.tlsId} />
            )
          }
        )}
      </div>
    </div>
  )
}