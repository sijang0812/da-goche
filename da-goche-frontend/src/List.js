import React, { useState, useEffect } from 'react';
import './App.css';
import Head from './Head';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Main({selectId}) {
  return (
    <div className="bg">
        <Head> </Head>
        <p id="pQstn">{selectId}</p>
          
    </div>
  )
}