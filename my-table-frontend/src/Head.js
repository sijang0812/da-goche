import React from 'react';
import { Link } from 'react-router-dom';

function Head() {
    return (
        <>
            <Link to="/main/restaurant">
                <button>레스토랑예약</button>
            </Link>
            <Link to="/main/delivery">
                <button>배달주문</button>
            </Link>
            <Link to="/main">
                <button>메인</button>
            </Link>
        </>
    );
}

export default Head;