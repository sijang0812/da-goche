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
    name: '화장실',
    url : 'img/bathroom.png'
  },
  {
    id  : 'kitchen',
    name: '주방',
    url : 'img/bathroom.png'
  },
  {
    id  : 'room',
    name: '방',
    url : 'img/bathroom.png'
  },
  {
    id  : 'livingroom',
    name: '거실',
    url : 'img/bathroom.png'
  },
  {
    id  : 'veranda',
    name: '베란다',
    url : 'img/bathroom.png'
  },
  {
    id  : 'etc',
    name: '기타',
    url : 'img/bathroom.png'
  }
];

export default App;