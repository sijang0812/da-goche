import React from 'react';

export default function Question({ category }) {    
    console.log("테스트",category);
    return (
        <div>
            <img className="imgAnswr" src={require( './img/' +  category.tlsId + '.png').default } />
            <p className="pAnswr">{category.tlsNm}</p>
        </div>
    )
}