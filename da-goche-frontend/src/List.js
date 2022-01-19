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
  console.log("테스트 ",category);
  // axios.get(url)
  // .then(function(response){
  //   setCntClick(cntClick + 1);
  //   console.log("성공");
     list2 = response.data; //setList(response.data);
  //   //setList(JSON.stringify(response.data));
  //   console.log("**list1**" + list);
  //   console.log("**list1**" + list[0].tlsNm);
  // })
  // .catch(function(error){
  //   console.log("실패");
  // })
  return (
    <div className="bg">
      <Head/>
      <div className="divBody">
        {/* {list2.map( 
          item => {
            return (
            <Item item = {item} key={item.tlsId} />
            )
          }
        )} */}
      </div>
    </div>
  )
}