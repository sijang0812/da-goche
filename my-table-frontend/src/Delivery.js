import Head from './Head.js';
import './App.css';
import React from 'react';


function Delivery() { 
  // const [message, setMessage] = useState([]);
  // useEffect(() => { 
  //   fetch("/Delivery").then((response) => { return response.json(); }).then(function (data) { setMessage(data); }); }, []);
    return ( 
      <div> 
        {/* <ul> {message.map((text, index) => <li key={`${index}-${text}`}>{text}</li>)} </ul> */}
        <Head />
      </div> 
    ); 
}

export default Delivery;