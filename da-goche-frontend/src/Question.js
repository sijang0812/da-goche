import React from 'react';

export default function Question({ category }) {    
    //category.sub[0].id
    return (
        <div>
            <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } />
            <p className="pAnswr">{category.name}</p>
        </div>
    )
}