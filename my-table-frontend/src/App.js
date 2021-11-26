import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Delivery from './Delivery';
import Restaurant from './Restaurant';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/main/restaurant' element={<Restaurant />} />
          <Route path='/main/delivery' element={<Delivery />} />
          <Route path='/main' element={<Main />} />
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;