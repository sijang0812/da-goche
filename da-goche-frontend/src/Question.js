import React from 'react'

export default function Question({ category }) {
    function clickLogo(param) {
        //alert(`hear: ${param}`);
        alert(`${param}`);
        
    }

    return (
        <div className="divAnswr">
            <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.name)} />
            <p className="pAnswr">{category.name}</p>
        </div>
    )
}