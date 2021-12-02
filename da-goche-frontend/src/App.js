import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Delivery from './Delivery';
import Restaurant from './Restaurant';

function App() {

  const [categories, setCategory] = useState(CATEGORY_DEPTH);

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

const CATEGORY_DEPTH = [
  {
    id       : 'bathroom',
    name     : '화장실',
    sub_id   : ['pipe', 'faucet', 'floor', 'etc'],
    sub_name : ['배관', '수도꼭지', '바닥', '기타']
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

export default App;