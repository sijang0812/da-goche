import React from 'react';

export default function Item({ item }) {    
    console.log("테스트",item);
    return (
        <div>
            <img className="imgAnswr" src={require( './img/' +  item.tlsId + '.png').default } />
            <p className="pAnswr">ㄱㄱㄱ</p>
        </div>
    )
}