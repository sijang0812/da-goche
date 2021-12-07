import React from 'react';
import Question2 from './Question2';

export default function Question({ category }) {    
    function clickLogo(param) {
        alert(`hear: ${param}`);
        {param.map( category2 => {
            return <Question2 category2={category2} key={category2.id} />
        })}
    }
    //category.sub[0].id
    return (
        <div className="divAnswr">
            <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.sub)} />
            <p className="pAnswr">{category.name}</p>
        </div>
    )
}