import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Delivery from './Delivery';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Delivery' element={<Delivery />} />
          <Route path='/Main' element={<Main />} />
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;