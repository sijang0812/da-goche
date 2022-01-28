/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Head from './Head';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Main({selectId}) {
  const [list, setList] = useState("");

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true //이 설정을 통해 문자열 맨 앞의 ?를 생략
  });
  console.log(query);
  const showDetail = query.detail === "true"; //쿼리의 파싱 결과 값은 문자열

  const query = querystring.parse(location);
  console.log(">>>", query, "<<<");

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
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Head from './Head';
import Item from './Item';
import qs from 'qs';
import querystring from 'query-string';

export default function List() {
  const [list, setList] = useState( [{ tlsId : '001', tlsNm : '첼라'}] ); 

  const location = useLocation();
  const { props } = location.state;
  console.log("Main에서 Link to로 넘기는 파라미터 값: ", props);
  
  function callback(param) {
    console.log(list);
  }

  useEffect(
    () => {
      axios({
        srcId  : props,
        url    : '/list',
        method : 'GET'
      }).then((res) => {
        setList(res.data);
        callback(res.data);
      })
    }, []
  );

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