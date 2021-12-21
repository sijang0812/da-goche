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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Main({selectId}) {
  const [list, setList] = useState();
  
  function callback(param) {
    setList(param);
    console.log("[list]: " + list);
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
        <p id="pQstn">{list}</p> */}
        <table>
          {list&&list.map( 
            item => {
              return (
                <tr key="{item}">{item}
                  <td>{item.tlsId}</td>
                  <td>{item.tlsNm}</td>
                </tr>
              )
            }
          )}
        </table>
      </div>
    </div>
  )
}