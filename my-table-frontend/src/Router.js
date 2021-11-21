import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Delivery from './Delivery';;

export default () => (
    <Router>
    {/* <Header/>라우터 관리 */}
    <Route path='/Delivery' component={Delivery}/>
    </Router>
    )