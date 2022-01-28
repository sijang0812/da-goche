import React from 'react';

export default function Item({ item }) {
    return (
        <div>
            {/* <img className="imgAnswr" src={require( './img/' +  item.tlsId + '.png').default } /> */}
            <p className="pAnswr">{item.tlsNm}</p>
        </div>
    )
}