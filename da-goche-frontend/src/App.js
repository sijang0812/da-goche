import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Delivery from './Delivery';
import Restaurant from './Restaurant';

function App() {

  const [categories, setCategory] = useState(CATEGORY_DEPTH1);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/main' element={<Main categories={categories} />} />
          <Route render={() => <div className='error'>에러 페이지</div>} />
        </Routes>
      </Router>
    </>
  );
}

const CATEGORY_DEPTH1 = [
  {
    id  : 'bathroom',
    name: '화장실'
  },
  {
    id  : 'kitchen',
    name: '주방'
  },
  {
    id  : 'room',
    name: '방'
  },
  {
    id  : 'livingroom',
    name: '거실'
  },
  {
    id  : 'veranda',
    name: '베란다'
  },
  {
    id  : 'etc',
    name: '기타'
  }
];

const CATEGORY_DEPTH2 = [
  {
    id  : 'bathroom',
    name: '화장실'
  }
];

export default App;